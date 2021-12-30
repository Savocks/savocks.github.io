import { PageTitle } from "../../components/layout/page-title/PageTitle";
import { Section } from "../../components/layout/section/Section";
import {
  FaAddressCard,
} from "react-icons/fa";
import { Emphasized } from "../../components/typography/emphasized/Emphasized";
import { H1 } from "../../components/typography";


export function Contacts() {
  return (
    <>
      <PageTitle>
        <H1>You can find me at <Emphasized>these contacts</Emphasized></H1>
      </PageTitle>
      <Section bgColor="white" direction="left">
        <p className="description">
         <address>
           <div>
             <a href="tel:+393888916646">+39 388 891 6646</a>
           </div>
           <div>
             <a href="mailto:giulio.savoca97@gmail.com">giulio.savoca97@gmail.com</a>
           </div>
         </address>
        </p>
        <div className="icon">
          <FaAddressCard />
        </div>
      </Section>
    </>
  );
}

