import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Offer from "@/components/Offer";
import ProductsList from "@/components/ProductsList";
import WhyChoose from "@/components/WhyChoose";
import ContactSection from "./contact/page";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <>
		
			<Hero />
			<Offer />
			<Services />
			<ProductsList />
			
			<WhyChoose />
			<Clients />
<ContactSection />
		</>
  )
}
