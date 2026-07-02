import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";

export const ContactFormSection = () => {
  const {
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    isLoading,
    success,
    error,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-foreground">
        Send Us a Message
      </h2>

      <p className="mt-3 text-base leading-7 text-muted-foreground">
        Complete the form below to contact the Diabetes Care Unit.
        Our healthcare team will respond to your inquiry as soon as
        possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {/* STATUS MESSAGES */}
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-600">
            {success}
          </div>
        )}

        {/* EMAIL */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
           Your Email Address
          </label>

          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            autoComplete="email"
          />
        </div>

        {/* SUBJECT */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium"
          >
            Subject
          </label>

          <Input
            id="subject"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* MESSAGE */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium"
          >
            Message
          </label>

          <Textarea
            id="message"
            rows={6}
            className="resize-none"
            placeholder="Please describe your question, request, or concern..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          disabled={isLoading}
          className="h-11 w-full sm:w-auto px-8 gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};