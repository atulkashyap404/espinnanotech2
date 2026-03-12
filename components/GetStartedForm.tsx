"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function GetStartedForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    organization: "",
    contactNumber: "",
    country: "",
    address: "",
    productInterest: "",
    quantity: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          designation: "",
          organization: "",
          contactNumber: "",
          country: "",
          address: "",
          productInterest: "",
          quantity: "",
          requirements: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">Your inquiry has been submitted successfully. Our team will get back to you shortly.</p>
        <Button
          onClick={() => setSubmitStatus("idle")}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-6">Get Started with E-SPIN NANOTECH</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-[120px_1fr_1fr] gap-4">
          <select
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none cursor-pointer"
          >
            <option value="" disabled>Title *</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
          <Input
            required
            placeholder="First Name *"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <Input
            required
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <Input
          required
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          required
          placeholder="Designation *"
          value={formData.designation}
          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
        />

        <Input
          required
          placeholder="Organization/University *"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            required
            type="tel"
            placeholder="Contact Number *"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
          />
          <Input
            required
            placeholder="Country *"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </div>

        <Input
          required
          placeholder="Address *"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none cursor-pointer"
          >
            <option value="" disabled>Product Interest</option>
            <option value="Nanofiber Membrane">Nanofiber Membrane</option>
            <option value="Air Filtration Membrane">Air Filtration Membrane</option>
            <option value="Ion-Exchange Membrane">Ion-Exchange Membrane</option>
            <option value="Cosmetic Membranes">Cosmetic Membranes</option>
            <option value="Customized Membrane">Customized Membrane</option>
            <option value="Electrospinning Equipment">Electrospinning Equipment</option>
            <option value="Functional Products">Functional Products</option>
            <option value="Other">Other</option>
          </select>
          <Input
            placeholder="Estimated Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
        </div>

        <Textarea
          required
          placeholder="Your Requirements *"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="min-h-[120px]"
        />

        {submitStatus === "error" && (
          <p className="text-red-600 text-sm text-center">
            Something went wrong. Please try again or email us directly at espininternal@gmail.com
          </p>
        )}

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
