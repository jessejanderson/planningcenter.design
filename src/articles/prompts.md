---
path: "/prompts"
date: "2016-08-22"
title: "Prompts"
category: "interface"
---

This is a framework for writing `prompt` copy.

A user might uncover several prompts in the same session. Having those prompts feel like they were written by the same person is reassuring.

Any of these recommendations may be disregarded for the sake clarity.

"MUST" rules will rarely find a good reason to be broken. In most cases, this framework will get you to a passable prompt.

## Anatomy

* [Headline](#headline)
* [Body](#body)
* [Cancel Button](#cancel-button)
* [Continue Button](#continue-button)

## Color

* [Color Legend](#color-legend)

## Common Cases

* [Destroy Record](#destroy-record)
* [Discard State](#discard-state)
* [Disrupt Controlled Process](#disrupt-controlled-process)
* [Disrupt Uncontrolled Process](#disrupt-uncontrolled-process)

## SweetAlert Preferences

* [Don't use stock icons](#dont-use-stock-icons)

---

## Headline

* It **MUST** be present.
* It **MUST** be phrased as a question.
* It **SHOULD** be specific to the task.
* It **SHOULD** be answerable with "yes" or "no".
* It **MAY** be generic.

#### Good

> "Delete Person?"

> "Stop Mailing?"

> "Order Pizza?"

#### Poor but passable

> "Are you sure?"

#### Bad

> "Delete?"

> "Remove or keep?"

> "Cancel?"

## Body

* It **SHOULD** be present.
* It **SHOULD** clearly state the outcome of continuing.
* It **SHOULD** clearly state side effects.
* It **SHOULD** clearly state repeatability (if any).

#### Good

> "Deleting Cathy will remove her from People and all other Planning Center apps. Any related activity will also be deleted. You cannot un-delete Cathy."

> "Your registration is incomplete. Cancel now and your progress will not be lost."

> "Generating Lists can take up to 10 minutes. Your list might still be processing. If you cancel now, you can try again later."

#### Bad

> "You're about to take an action that cannot be undone."

> "Doing this may be dangerous."

> "Deleting this person has consequences."

## Cancel Button

* It **MUST** be positioned left of the Continue Button.
* It **MUST NOT** be destructive.
* It **SHOULD** look safe/neutral (like hitting escape).
* It **SHOULD** read "Cancel" or be preceded with "No, "
* It **MAY NOT** be present (if other close option is provided).

#### Good

> "Cancel"

> "Go back"

> "No, keep this person"

> "No, keep going" (when cancelling a kill-process request)

#### Bad

> "Yes"

> "Escape"

> "Undo"

## Continue Button

* It **MUST** be present.
* It **MUST** be positioned right of the Cancel Button.
* It's color **SHOULD** represent the action being taken.
* It **SHOULD** read "Continue" or preceded with "Yes, "
* It **MAY** be destructive.

#### Good

> "Continue"

> "Yes, delete this person"

> "Yes, stop importing"

#### Bad

> "No"

> "Enter"

## Color Legend

* CANCEL = `NO COLOR`
* DESTROY = `RED`
* CAUTION = `YELLOW`
* CREATE = `GREEN`
* GENERIC, NON-GENERATIVE, NON-DESTRUCTIVE ACTION = `BLUE/GRAY`

## Destroy Record

A user shouldn't be able to easily delete data. Put some speed bumps in place.

Your first line of defense is going to be the Action button. It should look pretty ominous.

#### Action Button

The button should start with "Delete", "Remove", or the like. It should also be `red`.

<div class="demo" style="text-align: center">
  <button class="destroy-btn btn"> Delete Cathy </button>
</div>

#### Prompt

##### Iteration 1

* Headline: generic
* Body: very specific. difficult to code.
* Cancel Button: "Cancel"
* Continue Button: "Yes, ..."

<div class="demo prompt">
  <h1>Delete Cathy?</h1>
  <p>Deleting Cathy will remove her from all Planning Center apps. Her activity
  will be lost. You cannot un-delete Cathy.</p>

  <div class="buttons">
    <button class="cancel-btn btn"> Cancel </button>
    <button class="destroy-btn btn"> Yes, Delete Cathy </button>
  </div>

</div>

##### Iteration 2

* Headline: specific
* Body: less specific. easy to code.
* Cancel Button: "No"
* Continue Button: "Yes, ..."

This is harder for the user to read but might spare some embarrassing gender mishaps.

<div class="demo prompt">
  <h1>Are you sure?</h1>
  <p>Deleting this person will remove them from all Planning Center apps. Their
  profile and activity will be deleted immediately. This can't be undone.</p>

  <div class="buttons">
    <button class="cancel-btn btn"> No </button>
    <button class="destroy-btn btn"> Yes, Delete Cathy </button>
  </div>
</div>

##### Iteration 3

* Headline: generic
* Body: less specific. easy to code.
* Cancel Button: "Cancel"
* Continue Button: "Yes, ..."

If the originating button clearly says what you'll be deleting, I'd probably land on this. Generic but contextually simple.

<div class="demo prompt">
  <h1>Are you sure?</h1>
  <p>Deleting this person will remove them from all Planning Center apps. Their
  profile and activity will be deleted immediately. This can't be undone.</p>

  <div class="buttons">
    <button class="cancel-btn btn"> Cancel </button>
    <button class="destroy-btn btn"> Yes, Delete Cathy </button>
  </div>
</div>

## Discard State

Discarding transient state isn't destructive. The user shouldn't feel too concerned about going back or exiting the process. But You'll see that it's really hard to write body text for.

The action button should look pretty safe. They shouldn't be afraid to back out of a process.

#### Action Button

The button read "Cancel", "Go back", "Leave", etc. It should NOT be `red`. `gray` or `no color` are appropriate.

<div class="demo" style="text-align: center">
  <button class="cancel-btn btn"> Cancel </button>
  <button class="create-btn btn"> Register </button>
</div>

#### Prompt

This prompt is where you can find yourself in the "cancel my cancel" pit. Unfortunately, that doesn't leave us with many options. The way out is to be explicit and _really_ force the "yes"/"no" response.

* Cancel Button: "No, ..." (gray/no-color)
* Continue Button: "Yes, ..." (red)

<div class="demo prompt">
  <h1>Cancel Registration?</h1>
  <p>You haven't completed your registration. If you cancel now, your progress
  will be lost.</p>

  <div class="buttons">
    <button class="cancel-btn btn"> No, keep going </button>
    <button class="destroy-btn btn"> Yes, cancel registration </button>
  </div>
</div>

## Disrupt Controlled Process

A controlled process is one that can be halted or rerun with little consequence. Users should be adequately warned about the outcome but nothing truly destructive is happening.

The Action Button color is pretty contextual. I'd guess `yellow` in the majority of cases.

#### Action Button

The button should read as active: "Stop", "Pause", "Interrupt", etc. "Cancel" is too passive and should be reserved for cancelling your request to interrupt the process.

<div class="demo" style="text-align: center">
  <button class="quiet-destroy-btn btn"> Stop importing </button>
</div>

#### Prompt

So the prompt is where you can find yourself in the "cancel my cancel" pit. Unfortunately, that doesn't leave us with a lot of options. The way out is to be explicit and _really_ force the "yes"/"no" response.

* Cancel Button: "No, ..." (gray/no-color)
* Continue Button: "Yes, ..." (red)

<div class="demo prompt">
  <h1>Stop CSV Import?</h1>
  <p>Your CSV import has not completed. If you stop the import, no users will
    have been added. You may safely import this CSV later.</p>

  <div class="buttons">
    <button class="cancel-btn btn"> No, keep importing </button>
    <button class="quiet-destroy-btn btn"> Yes, stop this import </button>
  </div>
</div>

## Disrupt Uncontrolled Process

An uncontrolled process is one that can't be cleanly stopped, rolled back, or restarted. Think mass-mailer. These are dangerous and should look like it.

#### Action Button

The button should be active and somewhat ominous. "Halt", "Stop", "Pause", "Interrupt", etc. "Cancel" is too passive and should be reserved for cancelling your request to interrupt the process.

<div class="demo" style="text-align: center">
  <button class="destroy-btn btn"> Stop mailing </button>
</div>

#### Prompt

So the prompt is where you can find yourself in the "cancel my cancel" pit. Unfortunately, that doesn't leave us with a lot of options. The way out is to be explicit and _really_ force the "yes"/"no" response.

* Cancel Button: "No, ..." (gray/no-color)
* Continue Button: "Yes, ..." (red)

<div class="demo prompt">
  <h1>Stop mailing?</h1>
  <p>This email is being sent to 100 people. If you stop now, a portion of those
  people may have already recieved an email. This mailing cannot be picked up
  where it left off.</p>

  <div class="buttons">
    <button class="cancel-btn btn">No, continue mailing</button>
    <button class="destroy-btn btn">Yes, stop mailing</button>
  </div>
</div>

## Don't use stock icons

Don't use the stock icons. They don't match our aesthetic and are generally overstated. If you use these guidelines, the generic graphics won't provide much user-value.
