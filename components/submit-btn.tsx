"use client";

import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
  pending: boolean;
}

export default function SubmitBtn({ pending }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex items-center justify-center gap-2 h-12 w-32 rounded-full
      bg-gray-900 text-white transition-all
      hover:scale-110 hover:bg-gray-950
      active:scale-105 disabled:scale-100 disabled:opacity-60
      dark:bg-white/10"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
