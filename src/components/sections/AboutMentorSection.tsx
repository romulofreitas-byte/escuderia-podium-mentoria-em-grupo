import React from 'react';
import { Section, Heading, Text } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export const AboutMentorSection: React.FC = () => {
  return (
    <Section id="sobre-mentor" className="bg-podium-dark-secondary">
      <div className="text-center mb-16">
        <Heading level={2} center className="mb-6">
          Sobre o Mentor
        </Heading>
        <Text size="xl" center className="max-w-3xl mx-auto">
          Conheça Rômulo Freitas, criador do Método Pódium e especialista em vendas digitais
        </Text>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Basic Info */}
          <div className="text-center lg:text-left">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto lg:mx-0 mb-6 border-4 border-podium-yellow/20">
              <img 
                src="/romulo-foto.jpg" 
                alt="Rômulo Freitas" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-podium-text-primary mb-2">
              Rômulo Freitas
            </h3>
            <p className="text-xl text-podium-text-secondary mb-4">
              Criador do Método Pódium
            </p>
            <p className="text-podium-text-secondary mb-6">
              Especialista em vendas digitais e processos comerciais estruturados
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="https://linkedin.com/in/romulocsfreitas" 
                className="flex items-center space-x-2 text-podium-text-secondary hover:text-podium-yellow transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/romulocsfreitas" 
                className="flex items-center space-x-2 text-podium-text-secondary hover:text-podium-yellow transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@combustivelmv" 
                className="flex items-center space-x-2 text-podium-text-secondary hover:text-podium-yellow transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Bio and Credentials */}
          <div className="space-y-6">
            <Card>
              <h4 className="text-xl font-semibold text-podium-text-primary mb-4">
                Trajetória Profissional
              </h4>
              <div className="space-y-3 text-podium-text-secondary">
                <p>
                  Rômulo Freitas é especialista em vendas digitais com mais de 8 anos de experiência 
                  em processos comerciais estruturados. Criador do Método Pódium, uma metodologia 
                  comprovada para acelerar vendas em qualquer nicho.
                </p>
                <p>
                  Atua como mentor e consultor para profissionais que querem estruturar seu processo 
                  comercial e aumentar suas vendas de forma consistente e escalável.
                </p>
              </div>
            </Card>

            <Card>
              <h4 className="text-xl font-semibold text-podium-text-primary mb-4">
                Credenciais e Especializações
              </h4>
              <ul className="space-y-2 text-podium-text-secondary">
                <li className="flex items-start space-x-2">
                  <span className="text-podium-yellow">•</span>
                  <span>Criador do Método Pódium de Vendas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-podium-yellow">•</span>
                  <span>Especialista em Cold Call e Prospecção</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-podium-yellow">•</span>
                  <span>Consultor em Processos Comerciais</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-podium-yellow">•</span>
                  <span>Mentor de Vendas Digitais</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-podium-yellow">•</span>
                  <span>Fundador da Comunidade Pódium</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h4 className="text-xl font-semibold text-podium-text-primary mb-4">
                Filosofia de Ensino
              </h4>
            <p className="text-podium-text-secondary">
              &ldquo;Acredito que vendas é uma habilidade que pode ser aprendida e dominada por qualquer pessoa. 
              O Método Pódium foi criado para democratizar o acesso a técnicas de vendas de alta performance, 
              permitindo que profissionais de qualquer área possam estruturar seu processo comercial e 
              alcançar resultados consistentes.&rdquo;
            </p>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-podium-yellow/10 to-podium-yellow/5 border-podium-yellow/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-podium-text-primary mb-6">
                Entre em Contato Direto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-podium-yellow" />
                  <div>
                    <p className="text-podium-text-primary font-semibold">WhatsApp</p>
                    <p className="text-podium-text-secondary">(31) 99429-3099</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-podium-yellow" />
                  <div>
                    <p className="text-podium-text-primary font-semibold">Email</p>
                    <p className="text-podium-text-secondary">romulo.freitas@combustivelmv.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button 
                  href="https://wa.me/5531994293099"
                  className="mr-4"
                >
                  Falar no WhatsApp
                </Button>
                <Button 
                  variant="secondary"
                  href="mailto:romulo.freitas@combustivelmv.com"
                >
                  Enviar Email
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
