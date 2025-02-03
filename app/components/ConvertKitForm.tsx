"use client"

import { useEffect } from "react"
import Script from "next/script"

// Add this type declaration at the top of the file
declare global {
  interface Window {
    formkit: {
      init(): void;
    }
  }
}

export default function ConvertKitForm() {
  useEffect(() => {
    if (window.formkit) {
      window.formkit.init()
    }
  }, [])

  return (
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form
        action="https://app.kit.com/forms/7617792/subscriptions"
        className="seva-form formkit-form w-full max-w-md mx-auto"
        method="post"
        data-sv-form="7617792"
        data-uid="a17d99210c"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email for an email with the subject line 🤖 Welcome to You Probably Need An Agent and hit reply to let me know that you have got it.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div 
            data-element="fields" 
            data-stacked="false" 
            className="seva-fields formkit-fields flex flex-col sm:flex-row gap-3 sm:gap-2"
          >
            <div className="formkit-field flex-grow">
              <input
                className="formkit-input w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                name="email_address"
                aria-label="Email Address"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit w-full sm:w-auto bg-accent text-white font-bold py-3 px-6 rounded-md hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Join the Waitlist</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

