# External platform writes require confirmation

Date: 2026-08-11

## Decision

Reads from an external platform may proceed unattended. Writes must be
confirmed with Joe first.

Writes means creating or modifying a workspace, adding or editing a tracked
prompt, deleting or reorganising anything, and any action consuming paid quota.
Where it is unclear whether an action reads or writes, it is a write.

The rule is stated in `CLAUDE.md` under Standing rules, and enforced in skills
as a numbered Method step that halts — not as a body section. See
`templates/skill-template.md` for why.

## Reasoning

The asymmetry is in what a mistake costs, not in how likely one is.

A bad read wastes a few minutes. A bad write can overwrite a frozen prompt set
or pollute a tracking history, and **the corruption is invisible because the
numbers still look like numbers.** There is no diff to review, no error to
notice, nothing that fails loudly. A comparison built on the altered record
simply becomes wrong and stays wrong until someone questions a result that
looks entirely reasonable.

That failure mode is specifically dangerous here because measurement is the
product. `decisions/2026-08-11-measurement-ownership-split.md` puts the value
of the owned layer in the historical record — a baseline nobody else started
building. A history that has been silently altered is worth less than no
history, because it will be trusted. The same argument already drives the
frozen-prompt-set rule in `templates/skill-template.md`: prompt sets are dated
and never edited in place, and an unattended write is the obvious way that rule
gets broken by something other than a person.

Confirmation is cheap. Writes are rare, and a write worth doing is worth
thirty seconds of asking. The rule costs almost nothing in the cases where it
binds and prevents the one class of error that cannot be detected afterwards.

Reads are left unattended deliberately. Requiring confirmation for reads would
make measurement skills unrunnable without supervision, which defeats the point
of building them for a person with evenings.

## Searchable MCP — unverified

Searchable exposes an MCP. **Unverified:** what it permits, whether write
operations are exposed at all, and whether the integration is included on the
agency plan or priced separately. None of this has been checked, and it cannot
be until partner access resolves — see
`decisions/2026-08-11-client-reporting-deferred.md`.

The rule is written to hold regardless of what the integration turns out to
allow. It is a rule about authorisation, not about capability: an available
write tool is not permission to use it, and a restricted one does not make the
rule redundant, since the restriction could change without notice on a vendor's
release schedule.

This matters most in the case where the MCP turns out to be permissive. An
integration that can create workspaces and edit tracked prompts is exactly the
tool that could quietly rewrite a client's tracking history, and it would be
discovered at a QBR rather than at the time.

## What would reverse it

- An integration providing genuine, verifiable undo — versioned writes with a
  restore, not a delete flag. That removes the invisibility, which is the whole
  argument. Reads-unattended could then extend to reversible writes, with
  irreversible ones still confirmed.
- A write path so routine and so high-volume that confirming each one becomes
  the bottleneck. The right response is a narrow standing authorisation for
  that specific operation, recorded as its own decision, not a general
  relaxation.
- Subcontracted delivery at volume, where routing every write through Joe
  recreates the constraint the subcontracting was meant to release. That needs
  a scoped permission per subcontractor rather than dropping the rule.

None of these are near. The rule stands until one of them is real.
