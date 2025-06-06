"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function GetStartedForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    organization: "",
    contactNumber: "",
    address: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-6">Get Started with E-SPIN NANOTECH</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Input
          required
          type="tel"
          placeholder="Contact Number *"
          value={formData.contactNumber}
          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
        />

        <Input
          required
          placeholder="Address *"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />

        <Textarea
          required
          placeholder="Your Requirements *"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="min-h-[150px]"
        />

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
}