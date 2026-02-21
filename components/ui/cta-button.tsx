"use client";

import React from "react";

const ContactButton: React.FC = () => {
  return (
    <>
      <button className="contact-btn">
        <span>CONTACT</span>
      </button>

      <style jsx>{`
        .contact-btn {
          position: relative;
          overflow: hidden;
          padding: 0.75rem 2.5rem;
          border-radius: 9999px;
          background: black;
          color: white;
          font-weight: 600;
          letter-spacing: 0.15em;
          cursor: pointer;
        }

        .contact-btn span {
          position: relative;
          z-index: 2;
        }

        .contact-btn::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -120%;
          width: 220%;
          height: 220%;
          background: white;
          border-radius: 50%;
          transform: translateX(-50%) scale(0);
          transform-origin: bottom;
        }

        .contact-btn:hover::before {
          animation: moonwave 0.7s ease-in-out;
        }

        .contact-btn:hover span {
          animation: textwave 0.7s ease-in-out;
        }

        @keyframes moonwave {
          0% {
            transform: translateX(-50%) translateY(0) scale(0);
          }
          45% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            transform: translateX(-50%) translateY(-150%) scale(0);
          }
        }

        @keyframes textwave {
          0% {
            color: white;
          }
          45% {
            color: black;
          }
          100% {
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default ContactButton;
