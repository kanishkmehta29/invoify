"use client";

import React from "react";

// RHF
import { useFieldArray, useFormContext } from "react-hook-form";

// ShadCn
import { Label } from "@/components/ui/label";

// Components
import { BaseButton, CustomInputField, InputFormField } from "@/app/components";

// Icons
import { Plus } from "lucide-react";

type BillFromSectionProps = {};

const BillFromSection = ({}: BillFromSectionProps) => {
    const { control } = useFormContext();

    const CUSTOM_INPUT_NAME = "sender.customInputs";
    const { fields, append, remove } = useFieldArray({
        control: control,
        name: CUSTOM_INPUT_NAME,
    });

    const addNewCustomInput = () => {
        append({
            key: "",
            value: "",
        });
    };

    const removeCustomInput = (index: number) => {
        remove(index);
    };

    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="billFrom" className="text-xl font-semibold">
                Bill From:
            </Label>

            {/* // TODO: Remove control from these elements and apply it using useFormContext */}
            <InputFormField
                name="sender.name"
                label="Name"
                placeholder="Your name"
            />
            <InputFormField
                name="sender.address"
                label="Address"
                placeholder="Your address"
            />
            <InputFormField
                name="sender.zipCode"
                label="Zip"
                placeholder="Your zip code"
            />
            <InputFormField
                name="sender.city"
                label="City"
                placeholder="Your city"
            />
            <InputFormField
                name="sender.country"
                label="Country"
                placeholder="Your country"
            />
            <InputFormField
                name="sender.email"
                label="Email"
                placeholder="Your email"
            />
            <InputFormField
                name="sender.phone"
                label="Phone"
                placeholder="Your phone number"
            />

            {/* //? key = field.id fixes a bug where wrong field gets deleted  */}
            {fields?.map((field, index) => (
                <CustomInputField
                    key={field.id}
                    index={index}
                    location={CUSTOM_INPUT_NAME}
                    removeField={removeCustomInput}
                />
            ))}

            <BaseButton
                tooltipLabel="Add custom input to sender"
                size="sm"
                variant="link"
                className="w-fit"
                onClick={addNewCustomInput}
            >
                <Plus />
                Add Custom Input
            </BaseButton>
        </div>
    );
};

export default BillFromSection;
