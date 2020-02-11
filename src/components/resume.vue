<template>
    <div>
    <div class="text-center">
        <h3>Resume</h3>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                    Resume
            </h5>
        </div>

        <div class="card-body">
          <h3  class="font-weight-bold">Andrii Demydiuk</h3>
          <hr>

          <h4 class="font-weight-bold">PHP developer</h4>
          <p>27 years, Kyiv</p>
          <hr>

          <h4 class="font-weight-bold">Work Experience:</h4>
          <h5>Full Stack Web Developer</h5>
          <p>Tocan Solution <small class="text text-secondary">October 2019 — till present time</small></p>
          <ul>
            <li>Implementation of new product functionality  according to customer/internal requirements in a short time;</li>
            <li>Development of a new module for the product system;</li>
            <li>Refactoring, optimization of the finished code;</li>
            <li>Layout on the materials provided by the designer;</li>
          </ul>

          <h4 class="font-weight-bold">Education:</h4>
          <h5>National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"</h5>
          <p>Mechanical engineer, Department of Machines and Apparatus of Chemical and Oil Refinery Productions (MAHNV), Faculty of Chemical Engineering, Kyiv
            <small class="text text-secondary">09.2009 - 02.2015 (5 years 5 months)</small></p>

          <h4 class="font-weight-bold">Professional skills:</h4>
          <ul>
            <li>Understanding and applying the principles of OOP;</li>
            <li>Experience of PHP framework Yii2;</li>
            <li>Experience of MySQL, SQLite3, PDO;</li>
            <li>Knowledge of HTML5/CSS3;</li>
            <li>Knowledge of PHP5+, PHP7+, JavaScript, SQL;</li>
            <li>Experience of AJAX, JQuery, VueJS;</li>
            <li>Understanding responsive layout, JavaScript/CSS animation;</li>
            <li>Understanding REST API, Big O, Software development lifecycle;</li>
            <li>Experience Composer, NPM, Git, Ubuntu;</li>
          </ul>

          <p>Other: Install and configure Apache web-server, MS Office, MatchCad, AutoCAD, Autodesk Inventor, SolidWorks, KOMPAS 3D, Aspen HYSYS</p>

          <p>GItHub profile - <a href="https://github.com/medukr" target="_blank">https://github.com/medukr</a></p>

          <p>My website - <a href="http://card.sparrow.in.ua/resume" title="recursion">http://card.sparrow.in.ua</a></p>

          <h4 class="font-weight-bold">Language proficiencies:</h4>
            <ul>
              <li>English - pre-intermediate</li>
              <li>Ukrainian - native</li>
              <li>Russian - native</li>
            </ul>

          <h4 class="font-weight-bold">Additional information:</h4>
          <ul>
            <li>Focused on the result</li>
            <li>Proven analytical and communication skills (verbal and written)</li>
            <li>Ability to learn new technologies and challenging concepts quickly and implement them</li>
            <li>Problem solving, customer issues satisfaction. Motivated to develop yourself and solve complex tasks</li>
            <li>5 years of gas processing design experience</li>
          </ul>
        </div>

        <div class="card-footer">
          <div class="btn-group dropup">
            <button type="button" class="btn btn-success btn-pill dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Download resume
            </button>
            <div class="dropdown-menu">
              <a href="/assets/documents/Resume — PHP back-end developer, Andrii Demydiuk.rtf" class="dropdown-item">EN</a>
              <a href="/assets/documents/Резюме — PHP back-end developer, Андрей Демидюк.rtf" class="dropdown-item">РУС</a>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "resume"
    }
</script>

<style scoped>

</style>
