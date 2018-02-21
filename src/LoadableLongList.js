import React from "react";
import Loadable from "react-loadable";
import Loading from "./Loading";

const LoadableLongList = Loadable({
    loading: Loading,
    loader: () => import("./LongList")
});

export default LoadableLongList;