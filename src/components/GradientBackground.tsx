import React from "react";

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 h-full md:h-[90vh] -z-10 animate-gradient bg-[length:200%_200%] bg-gradient-to-br from-[--peach-300] via-[--sand-200] to-[--teal-300] dark:bg-gradient-to-br dark:from-[--teal-800] dark:via-[--boulder-700] dark:to-[--boulder-900]" />
  );
};

export default GradientBackground;
