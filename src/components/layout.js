import React from "react";
import {Announcement, Header, Footer} from "../components";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full overflow-auto m-0 p-0 overflow-x-hidden"
    >
      <Announcement
        longMessage="The health and safety of our staff, customers, and community is our
          top priority."
        shortMessage="Your safety is our top priority."
      ></Announcement>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </motion.div>
  );
};

export default Layout;
