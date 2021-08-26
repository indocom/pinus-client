import { connect } from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withAuth = connect(({ firebase: { auth } }: any) => ({ auth }));
