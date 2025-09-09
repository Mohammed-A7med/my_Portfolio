import SocialLinksGroup from "../Home/SocialLinksGroup";
import Section from "../Shared/Section";
import EmailIcon from "../Ui-icons/EmailIcon";
import LocationIcon from "../Ui-icons/LocationIcon";
import PhoneIcon from "../Ui-icons/PhoneIcon";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 mt-4">
          {/* ---------- Left: Contact Info ---------- */}
          <div className="contact-info flex justify-center">
            <div className="contant px-5 py-3 md:px-15 md:py-5">
              <h5 className="my-3 font-playfair text-3xl text-[#5f93e7] font-bold">
                Contact Information
              </h5>

              <div className="contact-info flex flex-col gap-y-1.5">
                <ContactItem
                  icon={EmailIcon}
                  text="mohamedahmedkhalaf68@gmail.com"
                />
                <ContactItem
                  icon={LocationIcon}
                  text="Hadayek El Ahram, Giza"
                />
                <ContactItem icon={PhoneIcon} text="01147404068" />

                {/* Social Links */}
                <div className="text-white">
                  <SocialLinksGroup />
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Right: Contact Form ---------- */}
          <div className="text-white border border-[#201b2b] rounded-sm">
            <div className="p-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
