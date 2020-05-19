import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

import { getAllGenericProperty } from "../../Queries/Queries.js";

import {
  loginCheck,
  registerData,
  loginFormLoad,
} from "../../redux/Actions/LoginActions";

export function LandingPage() {
  const { loading, error, data } = useQuery(getAllGenericProperty);

  if (data) {
    console.log(data);
  }

  return <div>LandingPage</div>;
}

const mapStatetoProps = (state) => {
  return { state };
};

const mapDispatchtoProps = {
  loginCheck,
  registerData,
  loginFormLoad,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(LandingPage);
