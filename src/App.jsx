//App.jsx
import './App.css'
import '../fonts/stylesheet.css'
import './App.js'
import logo_black from '/lib/icons/logo_black.svg'
import logo_white from '/lib/icons/logo_white.svg'
import document from '/lib/icons/document.svg'
import aboutCompanyImg from '/lib/img/stock-photo-couple-relaxing-in-hot-tub-by-swimming-pool-at-tropical-resort-banner-with-copy-space-2445826555.jpg'
import bugattiChiron from '/lib/img/stock-photo-monte-carlo-monaco-september-bugatti-chiron-yellow-french-hypercar-driving-on-streets-of-2141838871.jpg'
import businessManCheck from '/lib/img/stock-photo-young-business-man-check-in-in-hotel-smiling-female-receptionist-behind-the-hotel-counter-showing-1343895914.jpg'
import applicationForm from '/lib/img/stock-photo-filling-out-application-form-with-passport-and-hourglass-immigration-and-documentation-concept-2571092675.jpg'
import jetPlane from '/lib/img/stock-photo-business-jet-plane-interior-with-leather-comfortable-seats-private-airplane-transfer-2330592107.jpg'
import Director from '/lib/img/director.jpg'
import star from '/lib/icons/star.svg'
import magnifier from '/lib/icons/magnifier.svg'
import profile_icon from '/lib/icons/profile_icon.svg'
import heart from '/lib/icons/heart.svg'
import letter from '/lib/icons/letter.svg'
import telegram from '/lib/icons/telegram.svg'
import whatsapp from '/lib/icons/whatsapp.svg'
import phone from '/lib/icons/phone.svg'

function App() {


  return (
    <>
      <div>
        <header className='header'>
          <section>
            <div className='header_wrapper_top'>
              <div className='top_list'>
                <a className='header_top_list' href='#aboutCompany'>О компании</a>
                <a className='header_top_list' href='#advantages'>Преимущества</a>
                <a className='header_top_list' href='#contacts'>Контакты</a>
              </div>
              <div className='header_right'>
                <a href="#">
                  <img className='header_right_logo' src={logo_white} alt="Логотип KUPIN travel" />
                </a>
                <div className='header_right-container'>
                  <img src={document} alt="Иконка документа" />
                  <a href='#'>Оставить заявку</a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='header_info_wrapper'>
              <img className='header_info_logo' src={logo_white} alt="Логотип KUPIN travel" />
              <div className='header_info_title'>
                откройте для себя  <br />мир увлекательных <br /> путешествий
              </div>
              <div className='header_info_undertitle'>
                Больше 15 лет мы исследуем страны мира <br /> и предлагаем вам лучший отдых по высоким стандартам
              </div>
            </div>
          </section>
        </header>
        <main>
          <section id='aboutCompany'>
            <div className='aboutCompany_wrapper'>
              <img className='aboutCompany_img' src={aboutCompanyImg} alt="Пара расслабляется в джакузи" />
              <div className='aboutCompany_text'>
                <div className='aboutCompany_title'>
                  вы отдыхаете <br /> с комфортом — <br /> мы работаем для вас
                </div>
                <div className='aboutCompany_undertitle'>
                  <div className='aboutCompany_undertitle_upper'>
                    Забудьте о поиске идеального путешествия — мы возьмем на себя
                    все заботы. Ваш отдых будет безупречным, а впечатления —
                    незабываемыми
                  </div>
                  <div className='aboutCompany_undertitle_lower'>
                    Исключительный комфорт, персонализированный сервис
                    и неповторимые эмоции — все, что нужно для идеального
                    путешествия
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='advantages'>
            <div className='advantages_wrapper'>
              <div className='advantages_title'>
                преимущества работы с нами
              </div>
              <div className='advantages_cards_container'>
                <div className='advantages_card'>
                  <div className="advantages_card_img">
                    <img src={bugattiChiron} alt="Бугатти Широн" />
                  </div>
                  <p className='advantages_card_text'>
                    Персональные трансферы, аренда премиальных автомобилей и яхт, уникальные маршруты — все для истинных ценителей идеального отдыха
                  </p>
                </div>

                <div className='advantages_card_businessManCheck'>
                  <div className="advantages_card_img">
                    <img className='advantages_businessManCheck' src={businessManCheck} alt="Безнесмен проверяет документ" />
                  </div>
                  <p className='advantages_card_text'>
                    Комплекс услуг консьержа — от бронирования ресторанов до организации досуга
                  </p>
                </div>

                <div className='advantages_card'>
                  <div className="advantages_card_img">
                    <img src={applicationForm} alt="форма заявления" />
                  </div>
                  <p className='advantages_card_text'>
                    Паспорта, визы, эксклюзивные подарки — каждая деталь продумана для вашего комфорта и удовольствия ваших близких
                  </p>
                </div>

                <div className='advantages_card'>
                  <div className="advantages_card_img">
                    <img src={jetPlane} alt="Jet Plane" />
                  </div>
                  <p className='advantages_card_text'>
                    Бронирование регулярных и чартерных рейсов — комфортно и в срок
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id='time_management'>
            <div className='time_management_wrapper'>
              <p className='time_management_title'>мы ценим ваше время,</p>
              <p className='time_management_undertitle'>понимаем ваши желания и безупречно планируем <br /> каждую деталь вашего путешествия</p>
              <p className='time_management_undertitle_text'>Вам остается только наслаждаться отдыхом, <br /> созданным специально для вас</p>
            </div>
          </section>

          <section id='director'>
            <div className="director_wrapper">
              <img className='director_img' src={Director} alt="Евгений Купин" />
              <div className='director_content'>
                <div className='director_title'>
                  <p className='director_name'>Евгений <br /> КУПИН</p>
                  <p className='director_description'>Основатель и директор агентсва, <br /> имеет диплом IATA и высшее экономическое образование</p>
                </div>
                <div className='director_content_info'>
                  <div className='director_content_card'>
                    <div className='director_content_card_iconList'>
                      <img src={star} alt="Звезда" />
                      <img src={star} alt="Звезда" />
                      <img src={star} alt="Звезда" />
                      <img src={star} alt="Звезда" />
                      <img src={star} alt="Звезда" />
                    </div>
                    <p>Более 15 лет эксклюзивного сервиса в сфере туризма</p>
                  </div>
                  <div className='director_content_card'>
                    <img className='magnifier_size' src={magnifier} alt="Лупа" />
                    <p>Лично протестировали 4200 отелей в 78 странах, формируя премиальную базу только лучших из лучших</p>
                  </div>
                  <div className='director_content_card'>
                    <img className='profile_icon_size' src={profile_icon} alt="Профиль" />
                    <p>Каждый наш эксперт — профессионал с опытом от 5 лет, знающий тонкости люксового отдыха</p>
                  </div>
                  <div className='director_content_card'>
                    <img className='heart_size' src={heart} alt="Сердце" />
                    <p>Нам доверяют более 30 000 клиентов со всего мира</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='contacts'>
            <div className='contacts_wrapper'>
              <p className='contacts_title'>путешествуйте с компанией</p>
              <img className='contacts_logo' src={logo_black} alt="Логотип KUPIN travel" />
              <form className='contacts_form' action="/Name_Number">
                <input className='contacts_form_name' type="text" placeholder='Ваше имя' name='name' required />

                <input
                  className='contacts_form_number'
                  type="tel"
                  placeholder='+7 (999) 99 99 99'
                  pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
                  name='phone_number'
                  required
                />
                <div className='contacts_submit_wrapper'>
                  <img src={letter} alt="Иконка письма" />
                  <input className='contacts_form_submit' type="submit" name='submit' value="Отправить" />
                </div>
              </form>
            </div>
          </section>
        </main>
        <footer>
          <section>
            <div className='comfort_wrapper'>
              <p className='comfort_title'>
                откройте для себя <br /> мир без границ
              </p>
              <p className='comfort_undertitle'>
                Мы гарантируем вам комфорт, <br /> роскошный отдых и незабываемые впечатления
              </p>
            </div>
          </section>

          <section>
            <div className='footer_wrapper'>
              <a className='footer_a' href='#'>
                Политика конфиденциальности
              </a>
              <div className='footer_info'>
                <img className='footer_info_img' src={logo_white} alt="Логотип KUPIN travel" />
                <div className='footer_list_icons_wrapper'>
                  <a className="footer_list_icons" href='#'>
                    <img src={telegram} alt="Телеграм" className="footer_icon tg-icon" />
                  </a>
                  <a className="footer_list_icons" href='#'>
                    <img src={whatsapp} alt="Ватсап" className="footer_icon" />
                  </a>
                  <a className="footer_list_icons" href='#'>
                    <img src={phone} alt="Телефон" className="footer_icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  )
}

export default App
