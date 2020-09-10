/* eslint-disable */

import React from 'react';
import { CONTACT, SOCIAL_NETWORK } from '../../data/data';
import { FormContact, InputField, ButtonField, TextareaField} from './FormContact';

const ContactItem = ({items}) => {

    return <div className="list-contact">
        <i className={items.icon}></i>
        <a href={items.link} target="_blank">{items.title}</a>
    </div>
}

const Contact = () => {
    let contact = [];
    let network = []

    CONTACT.forEach(element => {
        contact.push(
            <ContactItem items={element} key={element.key} />
        )
    });

    SOCIAL_NETWORK.forEach(element => {
        network.push(
            <ContactItem items={element} key={element.key} />
        )
    });

    return <div className="contact-content">
        <div className="contact-item">
            <h4>Contacts</h4>
            {contact}
            <h4>Réseaux sociaux</h4>
            {network}
        </div>
        <div className="contact-item">
            <FormContact>
                <InputField type="text" name="title" value="Sujet" />
                <InputField type="email" name="email" value="Email" />
                <TextareaField name="message" value="Message" />
                <ButtonField type="submit" className="btn-theme" value="Envoyer" />
            </FormContact>
        </div>
    </div>
}

export default Contact;