<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    mounted: function () {
      let style = document.createElement('style')
      style.id = 'custom-styles'
      style.setAttribute('ref', 'customStyle')
//      let app = document.getElementById('app')
      let app = this.$refs.app
      app.appendChild(style)
    },
    computed: { // get data from store.js
      ...mapGetters({
        contract: 'getContract'
      })
    }
  }
</script>
CLIENT_ID='762526272137-6p4i29ea5qoae40uvlim6d6sirn282tm.apps.googleusercontent.com'
CLIENT_SECRET='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'
<template>
  <div id="app" ref="app">
    <div class="nav-menu no-print">
      <img class="logo" src="./assets/logoCompliance.png" title="Made with squarespace.com"/>
      <ul>
        <li>
          <router-link to="/" class="built-contract">Build a Contract</router-link>
        </li>
        <li>
          <router-link to="/login" class="built-contract">Login</router-link>
        </li>
        <!--<li>-->
          <!--<router-link v-if="contract.length > 0" to="/contract">Built Contract</router-link>-->
          <!--<a href="#" v-else class="nav-disabled">Built Contract</a>-->
        <!--</li>-->
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
  body{
    background-color: #e7f8f3;
  }
  /* a {
    color: #8dc6ff;
  }
  a:hover {
    color: #1d5a787a;
  } */
  .logo {
    width: 180px;
    height: 50px;
    margin-left: 15px;
  }
  .router-link-exact-active {
    /* background-color: #98f5e7; */
    color: #074034ce !important;
  }
  .nav-menu{
    background-color: #ffffff;
    position: fixed;
    top: 0px;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-menu ul {
    height: 70px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    /* text-align: left; */
  }
  .nav-menu li {
    display: inline-flex;
    height: 70px;
    margin-top: 5px;

  }
  .built-contract{
    align-items: flex-end;
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .nav-menu a {
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    /* background: #2c3e50; */
  }
  .built-contract:hover {
    color: #074034ce;
  }
  .nav-current {
    background-color: #6efad9;
  }
  .nav-disabled {
    background-color: rgb(72, 115, 106) !important;
    color: #787d82 !important;
    cursor: context-menu;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3e3f40;
    margin-bottom: 80px;
    margin-top: 110px;
  }
  @media print
  {
    .no-print, .no-print * {
      display: none !important;
    }
    #contract-section {
      padding: 0 !important;
      font-size: 1.4rem !important;
    }
    #contract-section h1{
      font-size: 1.63rem !important;
    }
    #contract-section h2{
      font-size: 1.51rem !important;
    }
  }
  @page {
    margin: 2cm 2cm 2cm 4cm;
  }
  /*@page document-page{*/
    /*mso-page-orientation: landscape;*/
    /*size: 841.95pt 595.35pt; !* EU A4 *!*/
    /*!* size:11.0in 8.5in; *! !* US Letter *!*/
  /*}*/
  /*div.document-page {*/
    /*page: document-page;*/
  /*}*/
  #contract-section {
    /*font-family: 'Courier New', Courier, monospace;*/
    /*font-family: 'Times New Roman', Times, serif;*/
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    white-space: pre-wrap;
    /*padding: 30mm 20mm 20mm 30mm;*/
    padding: 20mm 20mm 20mm 40mm;
    width: 210mm;
    margin: 0 auto;
    text-align: justify;
    /*float: left;*/
    background-color: #FFFFFF;
    display: table;
    table-layout: fixed;
    box-shadow: 10px 10px 25px #888888;
  }
  #contract-section .no-doc {

  }
  #contract-section h1 {
    font-size: 14pt;
  }
  #contract-section h2 {
    font-size: 13pt;
  }
  #contract-section .page-break-warning{
    background-color: #bbfff1;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30mm;
  }
  #contract-section .page-break{
    /*page-break-before: always !important;*/
    page-break-after: always !important;
    /*break-before: page !important;*/
    /*break-after: page !important;*/
    clear: both;
  }
  #contract-section .list{
    list-style-type: none;
    margin-left: 40px;
    /*text-indent: -23px;*/
    margin-bottom: 1rem;
  }
  #contract-section p {
    margin-bottom: 1rem;
  }
  #contract-section .numeric-list{
    list-style-type: none;
    text-indent: -3px;
  }
  #contract-section .circle-list{
    list-style-type: circle;
  }
  #contract-section .square-list{
    list-style-type: square;
  }
  #contract-section .title-center,
  #contract-section .subtitle-center,
  #contract-section .paragraph-center{
    text-align: center;
  }
</style>
