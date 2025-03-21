"use client";
import { ReactComponent as ArrowUpRightIcon } from "@/assets/icons/arrow-up-right.svg";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must not be empty!" }),
    email: z.string().email({ message: "Please enter a valid email." }),
    message: z.string().min(10, { message: "Message must not be empty" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        console.log("Form submitted", data);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Form submitted", result);
            toast.success("Message sent successfully!");
        } catch (error) {
            console.log("Submission error", error);
            toast.error("Failed to sen message. Please try again.");
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full"
            >
                {/* Name & Email Fields */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            placeholder="Your Name"
                                            {...field}
                                            className="w-full focus:border-transparent focus-visible:ring-0 border-2 border-gray-300 focus:outline-none focus:border-gray-100 transition-colors ease-in-out duration-300"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            placeholder="your.email@example.com"
                                            {...field}
                                            className="w-full focus:border-transparent focus-visible:ring-0 border-2 border-gray-300 focus:outline-none focus:border-gray-100 transition-colors ease-in-out duration-300"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Message Field */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder="Your message"
                                    {...field}
                                    rows={4}
                                    className="w-full focus:border-transparent focus-visible:ring-0 border-2 border-gray-300 focus:outline-none focus:border-gray-100 transition-colors ease-in-out duration-300"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full bg-gray-900 text-white inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 border border-gray-900 transition hover:bg-gray-800"
                >
                    <span className="font-semibold">Contact Me</span>
                    <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
