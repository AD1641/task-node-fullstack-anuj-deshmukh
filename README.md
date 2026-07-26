# VoCoVo recruitment exercise

This codebase contains a skeletal, microservices-like app for registering IoT appliances (e.g set top boxes, smart bulbs) with a database. There is a "front end" (a blank Create React App in the `client` directory), and a "back end" (a rudimentary Node app in the `api` directory).

## Scope

> [!IMPORTANT]
> Please work on this task for **2 hours maximum** (including the submission of your PR)
> It's ok if you spend less time on the exercise if you're comfortable verbally walking us through what you would do instead.

- 100% completion is **not** a requirement.
- You will be assessed on how you approach code, the quality of your proposed changes, and the structure of your commits.
- Any code changes should be runnable by our staff when reviewing your work. All the code is fair game for any changes you deem necessary.
- Your solution should consider all engineering practices e.g security, structure, maintainability, performance, usability etc.

### No-code approaches to the excercise

- If you'd prefer to raise a PR with a document stating what you would change with supporting [mermaid diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) or code snippets instead this is also a valid task submission.
- If you need any accommodations as part of this excercise or the follow up interview please get in touch with our recruitment team at recruitment@vocovo.com.

## Installation

To install this repo first ensure you're using the correct version of node.

We have an `.nvmrc` file so you're able to run `nvm use` at the top level directory. If you have not used `nvm` before please check out their [installation guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating). You'll need WSL (Windows Subsystem for Linux) if using a Windows machine.

Then you can run the following in the `client` and `api/appliances` folders:

```bash
npm i
npm start
```

## Delivery of your solutions

Please submit a PR to this repo which includes your solution to the below tasks.

## Tasks

> [!TIP]
> It's more important to demonstrate to us how you would approach
> an unfamiliar code base over completing all of the tasks.

1. Create suitable REST routes in the `appliances` service, to
   - create, read, update and delete values in the appliance "db".
   - reboot an appliance (we don't expect this to function, instead focus on how the API would look)
1. Write unit tests for at least one route
1. In the front end, add functionality to the `<ApplianceList>` component to make it list all the appliances from the API, ensuring all suitable data properties from the API are displayed in a way helpful to the user.
1. Style the `<ApplianceList>` with CSS to give it appropriate information architecture and clarity
1. Add sorting to any part of the list of appliances.

### Your Pull Request

> [!Important]
> ⏰ Please submit your PR at least 24 hours ahead of the follow up interview so we have time to review it

- Please structure your PR as you would for changes going into a production code base.
- Provide an overview of how you approached the task.
- Detail what your next steps would have been to ensure this application was production ready.

### The follow up interview

During the interview we will use your PR as a springboard to discuss how you approached the solution. The interview will be an informal tech discussion the same as a regular code review which you may conduct with peers with an opportunity to ask questions at the end. This should only take around 45 minutes.
