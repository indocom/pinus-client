# PINUS Client

Revamped PINUS website - AY20/21 onwards.

Accessible at [https://pinusonline.org](https://pinusonline.org)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development Setup

You should have the latest `npm` and `node` versions installed on your local machine before running. At least the tested `node` version is 16.x, which for those Ubuntu user, [this guide](https://joshtronic.com/2021/05/09/how-to-install-nodejs-16-on-ubuntu-2004-lts/) might be helpful (However the production Vercel has only Node 14.x for the latest Node version). Install `yarn` running

```bash
npm install yarn
```

Install all dependencies using:

```bash
yarn install
```

Duplicate the `.env.local.sample` file and rename the copy to `.env.local`. In the file,
fill in the API key with the information provided by the Tech Directors

(Note: the API key is **confidential**, do not disclose it).

Then run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Sidenote: Emulating Authentication

If you are developing on private routes, you will need to emulate Firebase Authentication
on your local machine to be able to do local login and user management.

To do that, you need to install the Firebase CLI with

```bash
yarn global add firebase-tools
```

Then, on another terminal (aside from the one that runs `npm run dev`),
navigate to the project folder again and run this command:

```bash
yarn run firebase:dev
```

This runs the Firebase Emulator and seeds it with three accounts: admin, creator, and member.

You can check the credentials for each at [http://localhost:4000/auth](http://localhost:4000/auth).
That page can also create new users if you want to test with custom accounts.
The minimum fields that you need to fill in are the "Display Name", "Email", and "Password".

## Available Scripts

For easier component development, you can run Storybook:

```bash
yarn run storybook // currently broken
```

Open [http://localhost:6006](http://localhost:6006) for the Storybook hub.

To lint relevant files:

```bash
yarn run lint
```

### To build the app for production:

```bash
nvm use 
yarn build
yarn start
```

## Learn More

To learn more about the stack and libraries used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Redux Tutorials](https://redux.js.org/tutorials/index)
- [React-Redux-Firebase Authentication Documentation](http://react-redux-firebase.com/docs/auth.html)

Licensed under the [MIT License](LICENSE.md)
