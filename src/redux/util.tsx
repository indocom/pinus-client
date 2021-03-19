import { connect } from "react-redux";

export const withAuth = connect(({ firebase: { auth } }) => ({ auth }));
