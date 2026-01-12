import './ContactForm.css'

function ContactForm({ onSubmit, submitLabel }) {


    return (
        <form onSubmit={onSubmit} className="contact-form">
            <div>
                <label>Namn</label>
                <input type="text" name="name" />
            </div>

            <div>
                <label>Email</label>
                <input type="text" name="email" />
            </div>

            <div>
                <label>Meddelande</label>
                <textarea name="message" />
            </div>

            <button type="submit">
                {submitLabel}
            </button>

        </form>
    )
}

export default ContactForm;