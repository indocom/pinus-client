# PINUS Client

Revamped PINUS website - AY20/21 onwards.

Accessible at [https://pinusonline.org](https://pinusonline.org)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development Setup

You should have the latest `npm` and `node` versions installed on your local machine before running.

Install all dependencies using:
```bash
npm install
```

Duplicate the `.env.local.sample` file and rename the copy to `.env.local`. In the file,
fill in the API key with the information provided by the Tech Directors

(Note: the API key is **confidential**, do not disclose it).

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Sidenote: Emulating Authentication

If you are developing on private routes, you will need to emulate Firebase Authentication
on your local machine to be able to do local login and user management.

To do that, you need to install the Firebase CLI with

```bash
npm install -g firebase-tools
```

Then, on another terminal (aside from the one that runs `npm run dev`),
run this command from the root directory:

```bash
firebase emulators:start
```

Open the Authentication hub at [http://localhost:4000/auth](http://localhost:4000/auth)
and create users as you wish. The minimum fields that you need to fill in are the "Display Name",
"Email", and "Password".

## Available Scripts

For easier component development, you can run Storybook:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) for the Storybook hub.

To lint relevant files:
```bash
npm run lint
```

To build the app for production:
```bash
npm run build
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
