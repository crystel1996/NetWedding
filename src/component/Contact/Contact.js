/* eslint-disable */

import React, { useRef, useLayoutEffect } from 'react';
import { CONTACT, SOCIAL_NETWORK } from '../../data/data';
import { FormContact, InputField, ButtonField, TextareaField} from './FormContact';
import animeTypography from '../../Function/anime';
import { Translate } from '../../Function/Translate';

const ContactItem = ({items,translate}) => {

    const contactLinkRef = useRef(null);

    useLayoutEffect(() => {
        let text = contactLinkRef.current;
        let parent = text.parentElement.parentElement;
        text.innerHTML = text.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
        text.dataset.anime = translate;


        const onAnime = () => {
            if(text.dataset.anime == "false") {
                text.parentElement.style.opacity = 0;
            }
            animeTypography(text,parent);
        }

        window.addEventListener("scroll",onAnime);

        return () => {
            window.removeEventListener("scroll",onAnime);
        }

    },[]);

    return <div className="list-contact">
        <i className={items.icon}></i>
        <a href={items.link} ref={contactLinkRef} target="_blank">{items.title}</a>
    </div> 
}

const Contact = ({translate}) => {
    let contact = [];
    let network = []

    const formRef = useRef(null);

    CONTACT.forEach(element => {
        contact.push(
            <ContactItem items={element} key={element.key} translate={translate} />
        )
    });

    SOCIAL_NETWORK.forEach(element => {
        network.push(
            <ContactItem items={element} key={element.key} translate={translate} />
        )
    });

    useLayoutEffect(() => {
        let form = formRef.current;
        let parent = form.parentElement;

        form.dataset.translate = translate;

        const onTranslate = () => {
            if(form.dataset.translate == "false") {
                form.style.opacity = 0;
            }
            Translate(form,parent,"left");
        }

        window.addEventListener("scroll",onTranslate);

        return () => {
            window.removeEventListener("scroll",onTranslate);
        }

    },[]);

    const handleSubmit = (value) => {
        console.log(value);
    }

    return <div className="contact-content">
        <div className="contact-item">
            <h4>Contacts</h4>
            {contact}
            <h4>Social networks</h4>
            {network}
        </div>
        <div className="contact-item" ref={formRef}>
            <FormContact onSubmit={handleSubmit} defaultValue={{title:"",email:"",message:""}} describe="Formulaire de contact">
                <InputField type="text" name="title" value="Sujet" />
                <InputField type="email" name="email" value="Email" />
                <TextareaField name="message" value="Message" />
                <ButtonField type="submit" className="btn-theme" value="Envoyer" />
            </FormContact>
        </div>
    </div>
}

export default Contact;