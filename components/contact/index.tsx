"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Input,
  TextArea,
  Label,
  toast,
  FieldError,
  TextField,
} from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowLeft } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string(),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export default function ContactForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema,
    onSubmit: async (values: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      await new Promise((r) => setTimeout(r, 600));
      console.log("Contact form submitted:", values);
      toast.success("Message sent! I'll get back to you soon.");
      formik.resetForm();
    },
  });

  return (
    <section className="relative flex flex-col gap-12 font-manrope md:flex-row px-24 py-12">
      <div className="relative text-white hidden w-full overflow-hidden rounded-3xl md:block md:w-[40%]">
        <Image
          src="/assets/icon.png"
          alt=""
          width={600}
          height={600}
          className="h-full w-full object-cover shadow-lg"
        />
        <Link href="/" className="absolute top-3 left-3 z-10 w-fit">
          <Button
            variant="secondary"
            size="md"
            className="gap-2 bg-black text-white"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </Link>
        <div className="absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end bg-linear-to-t from-black to-transparent p-8">
          <h3 className="text-xl">Contact Us</h3>
          <p className="max-w-xs text-xs ">
            Ask about projects, pricing, or anything else. We are happy to help.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6 md:w-[60%]">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <TextField isInvalid={formik.touched.name && !!formik.errors.name}>
              <Label isRequired>Name</Label>
              <Input
                name="name"
                placeholder="John Doe"
                autoComplete="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              <FieldError>{formik.errors.name}</FieldError>
            </TextField>
          </div>

          <div className="flex flex-col gap-2">
            <TextField
              isInvalid={formik.touched.email && !!formik.errors.email}
            >
              <Label isRequired>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
              />
              <FieldError>{formik.errors.email}</FieldError>
            </TextField>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Phone (optional)</Label>
            <Input
              name="phone"
              type="tel"
              placeholder="+1 234 567 8900"
              autoComplete="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextField
              isInvalid={formik.touched.message && !!formik.errors.message}
            >
              <Label isRequired>Message</Label>
              <TextArea
                name="message"
                placeholder="Tell me about your project or question..."
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full min-h-[120px]"
              />
              <FieldError>{formik.errors.message}</FieldError>
            </TextField>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-black text-white"
            isDisabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
