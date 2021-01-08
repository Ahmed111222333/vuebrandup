<template>
  <div id="app" dir="rtl">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#home">
        <img src="@/assets/logo dark.png" class="img-fluid" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link active" href="#home">الرئيسية</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#clients">العملاء</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#about">حول</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">الخدمات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#why">لماذا نحن</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testmonial">الشهادات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">تواصل معنا</a>
          </li>
        </ul>
      </div>
      <div class="lang">
        <a href="index.html" class="btn btn btn-primary">EN</a>
        <a href="about.html" class="btn btn btn-primary">AR</a>
      </div>
    </nav>
    <header class="overlay header2" id="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-lg-7">
            <h1 class="heading-primary">
              <span class="heading-primary-main animated fadeInDown"
                >العلامة التجاريه.</span
              >
              <span class="heading-primary-sub animated fadeInUp"
                >شريك رقمي.</span
              >
            </h1>
            <p class="paragraph">
              تعد Brandup إحدى شركات NULLissues ،
              <br />
              وهو المسؤول عن تطوير استراتيجيات التسويق
              <br />
              لكبرى شركات الشرق الأوسط.
            </p>
            <a class="button button-main" href="#contact">
              ماذا تريد !
            </a>
          </div>
        </div>
      </div>
    </header>
    <section class="clients" id="clients">
      <div class="content-box">
        <div class="wow fadeInDown" data-wow-delay="1s">
          <div class="heading">
            <div class="heading_content-box">
              <h2 class="heading-title">موثوق به</h2>
              <br />
              <h1 class="heading-main">عملائنا السعداء</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col align-self-center">
              <div class="clients-logos">
                <img src="@/assets/client-1.png" alt="" />
              </div>
            </div>
            <div class="col align-self-center">
              <div class="clients-logos">
                <img src="@/assets/client-2.png" alt="" />
              </div>
            </div>
            <div class="col align-self-center">
              <div class="clients-logos">
                <img src="@/assets/client-3.png" alt="" />
              </div>
            </div>
            <div class="col align-self-center">
              <div class="clients-logos">
                <img src="@/assets/client-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about text-right" id="about">
      <div class="container">
        <div class="about-box">
          <div class="row">
            <div class="col-6">
              <div class="about-box_img wow fadeInUp" data-wow-delay="1s">
                <img class="about-img img-fluid" src="@/assets/rocket.svg" />
              </div>
            </div>
            <div class="col-6 wow fadeInLeft" data-wow-delay="1.5s">
              <div class="about-box_content">
                <div class="heading-sec">
                  <div class="heading_content-box">
                    <h2 class="heading-title">حول</h2>
                    <br />
                    <h1 class="heading-main">ما هو Brandup؟</h1>
                  </div>
                  <p class="paragraph">
                    Brandup هي إحدى شركات NULLissues ، وهي مسؤولة عن تطوير
                    استراتيجيات التسويق لشركات الشرق الأوسط الكبرى. إذا كنت تبحث
                    عن شريك رقمي ، فلا شك أن Brandup هو الخيار الأنسب.
                  </p>
                  <a class="button button-main" href="#services">أعرف أكثر </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services" id="services">
      <div class="container">
        <div class="heading">
          <div class="heading_content-box">
            <h2 class="heading-title">خدمات</h2>
            <br />
            <h1 class="heading-main">الذي نفعله ؟</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg mb-md-3">
            <div
              class="services-card text-center wow fadeInUp"
              data-wow-delay="1s"
            >
              <img src="@/assets/2.png" alt="" />
              <h2>تسويق الكتروني</h2>
              <p class="paragraph">
                22٪ من سكان العالم يستخدمون الفيسبوك. 62٪ من الناس في الولايات
                المتحدة هناك. 76٪ من مستخدمي Facebook و 51٪ من مستخدمي Instagram
                يتصفحونه كل يوم
              </p>
              <a class="button button-main a-1" href="#service-1">
                المزيد من التفاصيل
              </a>
            </div>
          </div>
          <div class="col-lg mb-md-3">
            <div
              class="services-card text-center wow fadeInUp"
              data-wow-delay="1s"
            >
              <img src="@/assets/4.png" alt="" />
              <h2>هندسة البرمجيات</h2>
              <p class="paragraph">
                وفر الوقت وزد من مستويات الإنتاجية. الصوت جيدة جدا ليكون صحيحا؟
                إنه ليس مع برنامج ERP. من خلال أتمتة العمليات الزائدة عن الحاجة
                ، يكون لدى المستخدمين المزيد من الوقت للعمل في المشاريع والمهام
                الملحة الأخرى
              </p>
              <a class="button button-main a-2" href="#service-2"
                >المزيد من التفاصيل</a
              >
            </div>
          </div>
          <div class="col-lg mb-md-3">
            <div
              class="services-card text-center wow fadeInUp"
              data-wow-delay="1s"
            >
              <img src="@/assets/1.png" alt="" />
              <h2>تحليل البيانات</h2>
              <p class="paragraphhe">
                قسم تحليل البيانات متخصص في إجراء مجموعة من التجارب الاجتماعية
                لقياس مدى تفاعل المستهلك مع عملك
              </p>
              <a class="button button-main a-3" href="#service-3"
                >المزيد من التفاصيل</a
              >
            </div>
          </div>
        </div>
        <div class="services_service text-right" id="service-1">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <div
                  class="services_service-content-box wow fadeInLeft"
                  data-wow-delay="1s"
                >
                  <div class="heading-sec">
                    <div class="heading_content-box">
                      <h2 class="heading-title">1-التواصل الاجتماعي</h2>
                      <br />
                      <h1 class="heading-main">نحن نبني هوية عملك</h1>
                    </div>
                    <p class="paragraph">
                      هوية العلامة التجارية هي مجموعة من جميع عناصر العلامة
                      التجارية التي تنشئها الشركة لتصوير الصورة الصحيحة لنفسها
                      للمستهلك
                    </p>
                    <a class="button button-main" href="">أسأل عن ذلك </a>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div
                  class="services_service-img-box wow fadeInRight"
                  data-wow-delay="1s"
                >
                  <img src="@/assets/service-1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="services_service" id="service-2">
            <div class="row">
              <div class="col-6 wow fadeInLeft" data-wow-delay="1s">
                <div class="services_service-img-box">
                  <img src="@/assets/service-2.svg" alt="" />
                </div>
              </div>
              <div class="col-6 wow fadeInRight" data-wow-delay="1s">
                <div class="services_service-content-box">
                  <div class="heading-sec">
                    <div class="heading_content-box">
                      <h2 class="heading-title">2- هندسة البرمجيات</h2>
                      <br />
                      <h1 class="heading-main">من نحن ؟</h1>
                    </div>
                    <p class="paragraph">
                      وفر الوقت وزد من مستويات الإنتاجية. الصوت جيدة جدا ليكون
                      صحيحا؟ إنه ليس مع برنامج ERP. من خلال أتمتة العمليات
                      الزائدة عن الحاجة ، يكون لدى المستخدمين المزيد من الوقت
                      للعمل في المشاريع والمهام الملحة الأخرى
                    </p>
                    <a class="button button-main" href="">اساال عن ذلك</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="services_service" id="service-3">
            <div class="row">
              <div class="col-6">
                <div
                  class="services_service-content-box wow fadeInLeft"
                  data-wow-delay="1s"
                >
                  <div class="heading-sec">
                    <div class="heading_content-box">
                      <h2 class="heading-title">3-تحليل البيانات</h2>
                      <br />
                      <h1 class="heading-main">بياناتك مهمة</h1>
                    </div>
                    <p class="paragraph">
                      هوية العلامة التجارية هي مجموعة من جميع عناصر العلامة
                      التجارية التي تنشئها الشركة لتصوير الصورة الصحيحة لنفسها
                      للمستهلك
                    </p>
                    <a class="button button-main" href="">اساال عن ذلك </a>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div
                  class="services_service-img-box wow fadeInRight"
                  data-wow-delay="1s"
                >
                  <img src="@/assets/service-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="whyus" id="why">
      <div class="container">
        <div class="heading">
          <div class="heading_content-box">
            <h2 class="heading-title">لماذا نحن</h2>
            <br />
            <h1 class="heading-main">لماذا تعتبر Brandup مختلفة تمامًا؟</h1>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div
                class="whyus_img-box align-self-center wow fadeInLeft"
                data-wow-delay="1s"
              >
                <img
                  src="@/assets/bg.svg"
                  alt=""
                  style="padding-bottom: 2rem;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="whyus_content wow fadeInRight text-right"
                data-wow-delay="1s"
              >
                <div class="row">
                  <div class="col-sm-6">
                    <span class="whyus_content-card whyus_content-card-1">
                      <p class="paragraph">
                        <i class="fas fa-check-square"></i>
                        نحن نحترم ثقافة عملك الفريدة.
                      </p>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="whyus_content-card whyus_content-card-2">
                      <p class="paragraph">
                        <i class="fas fa-check-square"></i>
                        تعتبر Brandup مسؤولة تمامًا عن عناصر علامتك التجارية.
                      </p>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="whyus_content-card whyus_content-card-3">
                      <p class="paragraph">
                        <i class="fas fa-check-square"></i>
                        نحن نكتب تقارير مهنية بانتظام.
                      </p>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="whyus_content-card whyus_content-card-4">
                      <p class="paragraph">
                        <i class="fas fa-check-square"></i>
                        نحن ندرس كل شيء قبل بدء حملتك
                      </p>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="whyus_content-card whyus_content-card-5">
                      <p class="paragraph">
                        <i class="fas fa-check-square"></i>
                        نحن نساعد في إنشاء محتوى أصلي تمامًا.
                      </p>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="whyus_content-card whyus_content-card-6">
                      <p class="paragraph">
                        <i class="fas fa-check-square"></i>
                        نحن نقرر ما هو مناسب لعملك.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contactus" id="contact">
      <div class="container-fluid">
        <div class="heading">
          <div class="heading_content-box">
            <h2 class="heading-title">تواصل معنا</h2>
            <br />
            <h1 class="heading-main">تواصل معنا الان</h1>
          </div>
        </div>
        <div class="form_box">
          <div class="row">
            <div
              class="form text-right col-md col-xs col-md-5 col-lg-5 col-xl-5 wow fadeInLeft"
              data-wow-delay="1s"
            >
              <form action="">
                <div class="form_box-label">
                  <label for="name">الاسم بالكامل</label>
                  <input
                    id="name"
                    type="text"
                    class="w-100"
                    name="name"
                    required
                  />
                </div>
                <div class="form_box-label">
                  <label for="Email">البريد الالكتروني</label>
                  <input
                    id="Email"
                    type="email"
                    name="Email"
                    class="w-100"
                    required
                  />
                </div>
                <div class="form_box-label">
                  <label for="Telephone">رقم الجوال</label>
                  <input
                    id="Telelphone"
                    type="tel"
                    name="Telephone"
                    required
                    class="w-100"
                  />
                </div>
                <div class="form_box-label">
                  <label for="name">اسم الشركه</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="w-100"
                    required
                  />
                </div>
                <div class="form_box-label">
                  <label for="field">مجالك</label>
                  <select name="field" id="field" class="w-100" required>
                    <option value="web">ويب</option>
                    <option value="marketing">تسوق</option>
                    <option value="campagin">حمله</option>
                  </select>
                </div>
                <div class="form_box-label text-center">
                  <label for="Submit"></label>
                  <button
                    class="button button-main text-center"
                    type="submit"
                    value="send"
                    name="submit"
                    style="margin-bottom: 2rem;"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
            <div
              class="map col-xs col-md col-md-7 col-lg-7 col-xl-7 wow fadeInRight"
              data-wow-delay="1s"
            >
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AC%D9%84%D8%A7%D8%A1%20%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D9%82%D8%A7%D8%B6%D9%8A&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-4  text-center mb-sm-3">
            <div class="footer_box">
              <h2>روابط سريعة</h2>
              <a href="#about">حول</a>
              <a href="#services">الخدمات</a>
              <a href="#why">لماذا نحن</a>
              <a href="#testmonial">الشهادات</a>
              <a href="#contact">تواصل معنا</a>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 text-center mb-sm-3">
            <div class="footer_box">
              <div class="footer_box-partners">
                <h2>شركاؤنا</h2>
                <a href="#">NULLISSUES</a><a href="#">TSD</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 text-center">
            <div class="footer_box">
              <h2>تجدنا</h2>
              <p class="paragraph">
                لوريم ايبرسيوم هو نموذج افتراضي يوضع في التصاميم
              </p>
              <span class="mail"
                ><i class="fas fa-envelope"> </i>ahmedalsolya@gmail.com
              </span>
              <span class="phone">
                <i class="fas fa-phone"> </i>+201096710328
              </span>
              <span class="map">
                <i class="fas fa-map-marker-alt"> </i>المنصوره , الجلاء , شارع
                القاضي
              </span>
            </div>
          </div>
        </div>
      </div>
      <span class="social">
        <div>
          <a href="#">
            <i class="fab fa-twitter-square "> </i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin "> </i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-square "> </i>
          </a>
          <a href="#">
            <i class="fab fa-youtube-square "> </i>
          </a>
        </div>
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped></style>
