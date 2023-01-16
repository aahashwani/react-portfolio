import React, { Component } from "react";
import { loremIpsum } from 'react-lorem-ipsum';


class Contact extends Component {
    render() {
        return (
            <section id="contact" class="contact">
                <div class="flex-row">
                    <h2 class="section-title secondary-border">
                        Contact
                    </h2>
                </div>

                <div class="contact-info">
                    <div>
                        <h3>Alishah Hashwani</h3>
                        <p>
                        </p>

                        <address>

                        </address>

                    </div>

                    <div class="contact-form">
                        <h3>Contact</h3>
                        <form>
                            <label for="contact-name">Your Name</label>
                            <input type="text" id="contact-name" placeholder="Enter your name" />

                            <label for="contact-message">Message</label>
                            <textarea id="contact-message" placeholder="Enter your Message"></textarea>
                            render<div className="text-wrapper">{loremIpsum()}</div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>



                </div>

            </section >
        );
    }
}

export default Contact;