# 2025-nextjs-template

<h1 align="center">
  <br>
    <img src="https://placehold.co/192x192" alt="Repository Banner" width="25%">  
  <br>
    Repository Name
</h1>

## Tech Lead Instructions

### 1. Setup repository settings

First, we need to ensure everyone commits the same way.

Go to features and turn off the features your team does not need.

Go to pull requests and turn off "allow merge commits" and "allow rebase merging". This ensures the commit history is linear and easy to follow.

Turn on "automatically delete head branches". This ensures that when you merge a PR, the branch is deleted.

### 2. Set up branch instructions

Go to settings and go to the "branches" tab under "code and automation"

Click "add classic branch protection rule"

The branch name pattern is "main"

Enable the following options

- Require a pull request before merging

- Require status checks to pass before merging
  - Select "pr-check" as the status check that must pass

### 3. Finish the README

Spec out the README.md file.

### Misc

Add project name to package.json

Make yourself a favicon.ico and swap out the one Vercel logo with it. There are online tools to do this.

Update title and description of the project in `src/app/layout.tsx`

Pick a primary color (based on your nonprofit) and change the primary color in `src/styles/theme.ts`. If you want to mess around with the secondary color do that as well.

## Description

Insert description of project here.
Give a high level of the non-profit, they're issue, and what you are doing.

## Getting Started

### Prerequisites

Please have the following installed on your machine:

- Node.js
- PNPM
- VSCode

Please have the following VSCode extensions installed:

- Prettier
- ESLint
- Code Spell Checker
- markdownlint

### Environment Variables

Create a `.env.local` file in the root directory of the project and add the following variables:

```text
EXAMPLE_ENV_VAR=example-value
EXAMPLE_ENV_VAR_2=example-value-2
PRIVATE_ENV_VAR=
PRIVATE_ENV_VAR_2=
```

Please contact leadership to obtain the following:

- PRIVATE_ENV_VAR
- PRIVATE_ENV_VAR_2

### Running the App

1. Run `pnpm install` to install the dependencies.
2. Run `pnpm run dev` to start the development server.

### Contributing

Branch protections are enabled on this repository.
To contribute, please create a new branch and make a pull request.
The rules for branch names are lax, just be sure to include your name.

An example branch name for a card that adds a reset password email would be:

```text
rudra-reset-password-email
```

Your pull request title must follow the conventional commits specification. An example of a valid pull request title is:

```text
feat: Add pending form submissions table
```

### Testing

#### Debugging

The `.vscode/launch.json` file is configured to run Next.js in debug mode. This can let you step through your code line by line and inspect variables.
To start debug mode, navigate to the `Run and Debug` tab in VSCode, select the mode, and click the green play button.
