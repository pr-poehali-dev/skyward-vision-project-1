import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

interface Project {
  title: string
  category: string
  image: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const projects: Project[] = [
    {
      title: "Сад загородного дома",
      category: "Ландшафтный проект под ключ",
      image: "https://cdn.poehali.dev/projects/f1b2c39b-9c66-4696-8329-a4c0539deecb/files/4b068a87-07ae-4e34-9af5-b0475533da06.jpg",
    },
    {
      title: "Цветники и водоём",
      category: "Озеленение участка",
      image: "https://cdn.poehali.dev/projects/f1b2c39b-9c66-4696-8329-a4c0539deecb/files/56f096ca-1496-43ac-9e70-4ce46042e4dd.jpg",
    },
    {
      title: "Зона отдыха с патио",
      category: "Благоустройство территории",
      image: "https://cdn.poehali.dev/projects/f1b2c39b-9c66-4696-8329-a4c0539deecb/files/e2165b95-38ab-44cf-986d-36d0424732fb.jpg",
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "Сколько стоит ландшафтный проект?",
      answer:
        "Стоимость зависит от площади участка, объёма работ и выбранных растений. Базовый проект озеленения начинается от определённой суммы за сотку. После выезда на участок и замеров мы подготовим точную смету с учётом всех ваших пожеланий — бесплатно и без обязательств.",
    },
    {
      question: "Что входит в работу под ключ?",
      answer:
        "Полный цикл: выезд и замеры, разработка дизайн-проекта, подготовка грунта, посадка деревьев, кустарников и газона, монтаж системы полива и освещения, укладка дорожек. Мы берём на себя всё — от идеи до готового сада, который остаётся только поливать.",
    },
    {
      question: "Даёте ли вы гарантию на растения?",
      answer:
        "Да. На все высаженные растения и выполненные работы мы предоставляем гарантию. Если растение не приживётся по нашей вине в течение гарантийного срока — заменим его бесплатно. Также предлагаем сезонное обслуживание сада для поддержания его в идеальном виде.",
    },
    {
      question: "Сколько времени занимает озеленение участка?",
      answer:
        "Дизайн-проект готовим за 5–10 дней. Сами работы по благоустройству занимают от нескольких дней до 3–4 недель в зависимости от площади и сложности. Точные сроки фиксируем в договоре, чтобы вы понимали, когда сможете наслаждаться готовым садом.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/f1b2c39b-9c66-4696-8329-a4c0539deecb/files/ec934d9a-b0c5-4e10-a523-42e0962fe2bb.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Leaf" className="w-5 h-5" />
            <span className="font-medium text-balance">Зелёная Империя</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Услуги", "Портфолио", "Этапы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:block px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              +7 (900) 000-00-00
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Оставить заявку</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Ландшафтный дизайн и озеленение под ключ</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Создаём сады, в которых хочется жить.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Проектируем и воплощаем озеленение участков любой сложности — от уютного цветника до целого сада. Грамотный
            проект, живые растения и аккуратная работа под ключ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Рассчитать стоимость
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть работы
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="ShieldCheck" className="w-4 h-4" />
            <span className="text-sm font-medium">Гарантия на растения и работы</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Project */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="PenTool" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Дизайн-проект</h3>
              <p className="text-white/80 leading-relaxed">Визуализация и план будущего сада до начала работ.</p>
            </div>

            {/* Plants */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Sprout" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Здоровые растения</h3>
              <p className="text-white/80 leading-relaxed">Отборный посадочный материал из проверенных питомников.</p>
            </div>

            {/* Turnkey */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Wrench" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Работа под ключ</h3>
              <p className="text-white/80 leading-relaxed">Полный цикл: от посадки до полива, дорожек и освещения.</p>
            </div>

            {/* Care */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Leaf" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Уход за садом</h3>
              <p className="text-white/80 leading-relaxed">Сезонное обслуживание, чтобы сад радовал круглый год.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Наши работы</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Несколько проектов, которые мы создали для наших клиентов — от частных садов до благоустройства
                территорий.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-white/60 mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как мы работаем</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От первого замера до готового сада — прозрачный процесс на каждом этапе.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Выезд и замеры</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Приезжаем на участок, изучаем рельеф, грунт и освещённость, обсуждаем ваши идеи и пожелания.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Дизайн-проект</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Готовим план озеленения с подбором растений и визуализацией, согласовываем смету и сроки.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Озеленение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Готовим грунт, высаживаем растения, укладываем газон, монтируем полив, дорожки и освещение.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Уход и гарантия</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Передаём готовый сад, даём рекомендации по уходу и предлагаем сезонное обслуживание.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Заказать озеленение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед заказом: от стоимости и сроков до гарантии на растения и уход за садом.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Icon name="Minus" className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Icon name="Plus" className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                      placeholder="Расскажите о вашем участке и пожеланиях..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Хотите красивый сад на своём участке? Оставьте заявку или позвоните — приедем на бесплатный замер и
                    рассчитаем стоимость. Отвечаем в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Leaf" className="w-7 h-7 text-green-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Анна Зеленова</h4>
                      <p className="text-gray-600">Главный ландшафтный дизайнер</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Icon name="Mail" className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Leaf" className="w-6 h-6" />
                  <span className="text-xl font-semibold">Зелёная Империя</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Студия ландшафтного дизайна и озеленения. Создаём живые, ухоженные сады под ключ — от проекта до
                  последнего саженца. Любим зелень и аккуратную работу.
                </p>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УСЛУГИ</h3>
                <ul className="space-y-3">
                  {["Озеленение участка", "Дизайн-проект", "Газон и посадки", "Системы полива"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Портфолио", "Наша команда", "Отзывы клиентов", "Гарантии"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Частые вопросы", "Уход за садом", "Условия работы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Советы по уходу за садом</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Зелёная Империя</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index