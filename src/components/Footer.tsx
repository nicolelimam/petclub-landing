import { PawPrint, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";

const links = [
  { title: 'Início', href: '#home' },
  { title: 'Clínica', href: '#about' },
  { title: 'Serviços', href: '#services' },
  { title: 'Produtos', href: '#products' },
  { title: 'Agendamento', href: '#appointment' },
]

const services = ['Consulta Veterinária', 'Vacinação', 'Exames', 'Banho e Tosa', 'Cirurgias', 'Emergência 24h']

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Pet<span className="text-primary">Club</span></span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Clínica veterinária e pet shop premium. Cuidando do seu melhor amigo com amor e excelência há mais de 15 anos.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, AiFillInstagram, VscTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-primary transition-colors">{l.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Rua dos Pets, 123<br />São Paulo - SP, 01000-000</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@petclub.com.br</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">Seg-Sáb: 8h-20h<br />Emergência: 24h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 PetClub. Todos os direitos reservados. Nicole Lima.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary">Termos de uso</a>
            <a href="#" className="hover:text-primary">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}