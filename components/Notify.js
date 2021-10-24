import React, { useContext } from "react";
import { UserContext } from "../store/GlobalState";
import Loading from "./Loading";
import Toast from "./Toast";

function Notify() {
  const [state, dispatch] = useContext(UserContext);
  const { notify } = state;

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && <Toast message={notify.error} isOpen={true} />}
      {notify.success && <Toast message={notify.success} isOpen={true} />}
    </>
  );
}

export default Notify;
