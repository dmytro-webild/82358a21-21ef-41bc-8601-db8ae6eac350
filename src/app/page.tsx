"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Início",
          id: "#hero",
        },
        {
          name: "Sobre",
          id: "#about",
        },
        {
          name: "Coleções",
          id: "#collections",
        },
        {
          name: "Contato",
          id: "#contact",
        },
      ]}
      brandName="STYLE MAN"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="ESTILO NÃO É ROUPA. É PRESENÇA."
      description="Descubra a curadoria de moda masculina que define o seu legado. Onde a elegância urbana encontra a sofisticação moderna."
      buttons={[
        {
          text: "Falar no WhatsApp",
          href: "https://wa.me/5531995274423",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-brown-suit-posing-near-dark-wall_158538-11158.jpg?_wi=1",
          imageAlt: "urban fashion model stylish man",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sitting-stylish-african-american-man-wear-sunglasses-cap-with-handbag-outdoor-against-skate-park-street-fashion-black-man_627829-3536.jpg",
          imageAlt: "urban fashion model stylish man",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/full-view-stylish-woman-city-looking-away_197531-33381.jpg",
          imageAlt: "urban fashion model stylish man",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/view-handsome-young-man-looking-camera_197531-33430.jpg",
          imageAlt: "urban fashion model stylish man",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/brutal-young-man-sunglasses-hat-island-travel_1321-3839.jpg",
          imageAlt: "urban fashion model stylish man",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-holding-smartphone-street-short-haired-teen-bright-glasses-denim-beige-jacket-posing-cafe-with-bottle-water_197531-29369.jpg",
          imageAlt: "urban fashion model stylish man",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="A Essência da STYLE MAN"
      description={[
        "Localizada no Shopping Oiapoque Eldorado, a STYLE MAN é a referência definitiva em moda masculina contemporânea em Contagem.",
        "Unimos a atitude do streetwear urbano à sofisticação necessária para o homem que busca destacar sua própria assinatura no mundo.",
      ]}
    />
  </div>

  <div id="collections" data-section="collections">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Camisetas Premium",
          price: "A partir de R$ 89",
          variant: "Streetwear",
          imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-indoors-still-life_23-2150756308.jpg?_wi=1",
          imageAlt: "modern t-shirt fashion photography",
        },
        {
          id: "p2",
          name: "Calças Contemporâneas",
          price: "A partir de R$ 159",
          variant: "Casual",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-blond-woman-red-skirt_613910-317.jpg",
          imageAlt: "modern t-shirt fashion photography",
        },
        {
          id: "p3",
          name: "Conjuntos Urbanos",
          price: "A partir de R$ 229",
          variant: "Exclusivo",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-tattooed-fit-woman-jean-shorts-plaid-shirt-with-longboard_343596-2797.jpg",
          imageAlt: "modern t-shirt fashion photography",
        },
        {
          id: "p4",
          name: "Bermudas Premium",
          price: "A partir de R$ 99",
          variant: "Casual",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-african-american-guy-white-jacket-looking-aggressive-camera-isolated-white-background_574295-4462.jpg",
          imageAlt: "modern t-shirt fashion photography",
        },
        {
          id: "p5",
          name: "Acessórios",
          price: "A partir de R$ 49",
          variant: "Detalhes",
          imageSrc: "http://img.b2bpic.net/free-photo/collection-beige-tone-colored-pants_23-2150773386.jpg",
          imageAlt: "modern t-shirt fashion photography",
        },
        {
          id: "p6",
          name: "Streetwear Collection",
          price: "Edição Limitada",
          variant: "Moda",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-bearded-male-step-electric-scooter-background_613910-13965.jpg",
          imageAlt: "modern t-shirt fashion photography",
        },
      ]}
      title="Nossas Coleções"
      description="Peças selecionadas com corte impecável e design exclusivo."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Corte Impecável",
          description: "Modelagens que valorizam a silhueta masculina.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-indian-handsome-business-man-evening-suit-restaurant_627829-804.jpg",
            imageAlt: "masculine luxury fashion store aesthetic",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-street-outfit_1303-19662.jpg",
            imageAlt: "masculine luxury fashion store aesthetic",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-brown-suit-posing-near-dark-wall_158538-11158.jpg?_wi=2",
          imageAlt: "masculine luxury fashion store aesthetic",
        },
        {
          title: "Curadoria Exclusiva",
          description: "Peças selecionadas para garantir autenticidade.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/student-with-goth-style-school_23-2150576841.jpg",
            imageAlt: "masculine luxury fashion store aesthetic",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/full-shot-rich-woman-home_23-2149722577.jpg",
            imageAlt: "masculine luxury fashion store aesthetic",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-indoors-still-life_23-2150756308.jpg?_wi=2",
          imageAlt: "masculine luxury fashion store aesthetic",
        },
        {
          title: "Atendimento VIP",
          description: "Consultoria de estilo personalizada via WhatsApp.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/surprised-woman-with-shopping-packets-looking-shop-windows_23-2147960705.jpg",
            imageAlt: "masculine luxury fashion store aesthetic",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/atelier-shop-full-sartorial-outfits_482257-90452.jpg",
            imageAlt: "masculine luxury fashion store aesthetic",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-tattoed-male-with-stylish-haircut-beard-gray-t-shirt-standing-leaning-against-brick-wall-room-with-loft-interior_613910-3912.jpg?_wi=1",
          imageAlt: "masculine luxury fashion store aesthetic",
        },
      ]}
      showStepNumbers={true}
      title="Por que escolher a STYLE MAN?"
      description="Eleve seu padrão com quem entende de moda masculina."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Estilo impecável",
          quote: "Melhor loja de Contagem. Roupas de altíssima qualidade.",
          name: "Lucas S.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-tattoed-male-with-stylish-haircut-beard-gray-t-shirt-standing-leaning-against-brick-wall-room-with-loft-interior_613910-3912.jpg?_wi=2",
          imageAlt: "happy customer style man clothing",
        },
        {
          id: "2",
          title: "Atendimento nota 10",
          quote: "As peças vestem muito bem. Super indico!",
          name: "Matheus B.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-sexy-businessman-handsome-model-man-casual-cloth-suit-sunglasses-sitting-bench-street_158538-9528.jpg",
          imageAlt: "happy customer style man clothing",
        },
        {
          id: "3",
          title: "Qualidade única",
          quote: "Não troco de loja. A STYLE MAN tem um diferencial único.",
          name: "Pedro F.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-choosing-cloths-menswear-shop_1303-30869.jpg",
          imageAlt: "happy customer style man clothing",
        },
        {
          id: "4",
          title: "Moda de verdade",
          quote: "Peças que fazem a diferença no look do dia a dia.",
          name: "Gabriel M.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-choosing-clothes-shop_1303-19716.jpg",
          imageAlt: "happy customer style man clothing",
        },
        {
          id: "5",
          title: "Satisfação total",
          quote: "Experiência de compra excelente, do atendimento à peça.",
          name: "Thiago C.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-blond-bearded-male-dressed-elegant-classic-jacket-posing-old-vintage-windows-background_613910-11247.jpg",
          imageAlt: "happy customer style man clothing",
        },
      ]}
      title="O que dizem os nossos clientes"
      description="A experiência de quem veste STYLE MAN."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "4.7+",
          title: "Avaliação Média",
          description: "Clientes satisfeitos no Shopping Oiapoque.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-wool-texture-details_23-2149620438.jpg",
          imageAlt: "luxury lifestyle urban city setting",
        },
        {
          id: "m2",
          value: "1000+",
          title: "Peças Vendidas",
          description: "Estilo espalhado por toda a cidade.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-length-photo-attractive-young-woman-with-long-hair-walking-street-city-while-looking-away-city-lifestyle_132075-9101.jpg",
          imageAlt: "luxury lifestyle urban city setting",
        },
        {
          id: "m3",
          value: "5 Anos",
          title: "No Mercado",
          description: "Construindo autoridade em moda masculina.",
          imageSrc: "http://img.b2bpic.net/free-photo/details-blue-blouse-made-out-silk_23-2148237592.jpg",
          imageAlt: "luxury lifestyle urban city setting",
        },
      ]}
      title="Nossa Presença"
      description="Marcas do nosso compromisso com a excelência."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Shopping Oiapoque",
        "Moda Urbana",
        "Street Style",
        "Premium Apparel",
        "Consultoria de Moda",
        "Estilo Masculino",
        "Contagem",
      ]}
      title="Presença em Eldorado"
      description="Estamos no coração da moda masculina de Eldorado."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      text="SE VISTA COMO A SUA MELHOR VERSÃO. Entre em contato e transforme seu visual hoje."
      buttons={[
        {
          text: "WhatsApp",
          href: "https://wa.me/5531995274423",
        },
        {
          text: "Ver Coleções",
          href: "#collections",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="STYLE MAN"
      copyrightText="© 2025 STYLE MAN | Shopping Oiapoque Eldorado"
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: MessageCircle,
          href: "https://wa.me/5531995274423",
          ariaLabel: "WhatsApp",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
