/**
 * Ping IndexNow on a production deploy, and ship the result with it.
 *
 * WHY onPostBuild, HAVING BEEN onSuccess. The original hook was onSuccess,
 * reasoning that URLs are only worth submitting once they are actually live:
 * submitting mid-build would hand engines URLs that a failed deploy then
 * never publishes. That reasoning still holds, and it is not free to give up.
 *
 * It was given up on 2026-11-24 because onSuccess runs after the publish
 * directory has been uploaded. Anything the script writes to dist/ at that
 * point is written to a directory nobody will ever serve, so the response
 * code could not leave the build log — which was the whole problem.
 * onPostBuild runs before the upload, so /indexnow-status.json ships with
 * the deploy whose submission it describes.
 *
 * What that costs: the URLs are submitted roughly a minute before they go
 * live, and if the deploy fails after this runs, engines have been told about
 * URLs that were never published. The consequence is small — IndexNow is a
 * hint, engines crawl minutes to days later, and the next deploy resubmits
 * the whole sitemap — but it is a real change and not a free one.
 *
 * ESM works here because site/package.json sets "type": "module". Netlify
 * resolves the plugin path in netlify.toml against the build base, which is
 * site/, and runs the hooks with that same directory as cwd — so the relative
 * path to the script below is correct from there.
 */
export const onPostBuild = async () => {
  if (process.env.CONTEXT !== 'production') {
    // Deploy previews and branch deploys live on *.netlify.app. Submitting
    // those would declare a host outside brandure.io and come back 422. No
    // status file is written either: a preview has nothing to report.
    console.log(`indexnow: skipping, CONTEXT=${process.env.CONTEXT}`);
    return;
  }

  const { execSync } = await import('node:child_process');
  try {
    execSync('node scripts/indexnow.mjs', { stdio: 'inherit' });
  } catch {
    console.log('indexnow: submission failed, continuing');
  }
};
