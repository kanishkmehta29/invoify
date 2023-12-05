"use client";

import { useState } from "react";

// ShadCn
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

// Components
import { BaseButton, SavedInvoicesList } from "@/app/components";

// Context
import { useInvoiceContext } from "@/app/contexts/InvoiceContext";

// Icons
import { FolderUp } from "lucide-react";

const InvoiceLoaderModal = () => {
    const [open, setOpen] = useState(false);

    const { invoicePdfLoading, savedInvoices } = useInvoiceContext();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <BaseButton
                    variant="outline"
                    tooltipLabel="Open load invoice menu"
                    disabled={invoicePdfLoading}
                >
                    <FolderUp />
                    Load Invoice
                </BaseButton>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader className="pb-2 border-b">
                    <DialogTitle>Saved Invoices</DialogTitle>
                    <DialogDescription>
                        You have {savedInvoices.length} saved invoices
                    </DialogDescription>
                </DialogHeader>

                <SavedInvoicesList setModalState={setOpen} />
            </DialogContent>
        </Dialog>
    );
};

export default InvoiceLoaderModal;
