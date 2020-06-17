import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navMenu: false,
    routes: [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/about',
        name: 'About',
      },
      {
        path: '/clinicalsites',
        name: 'Clinical Sites',
      },
      {
        name: 'Education',
        list: [
          {
            path: '/',
            name: 'Clinical Curriculum',
          },
          {
            path: '/',
            name: 'Didactic Curriculum',
          },
          {
            path: '/',
            name: 'Simulation',
          },
          {
            path: '/',
            name: 'Toxicology',
          },
          {
            path: '/',
            name: 'EMS',
          },
          {
            path: '/',
            name: 'Ultrasound',
          },
          {
            path: '/',
            name: 'Fellowship',
          },
          {
            path: '/',
            name: 'Research',
          },
          {
            path: '/',
            name: 'Electives',
          },
          {
            path: '/',
            name: 'Medical Students',
          }
        ],
      },
      {
        name: 'People',
        list: [
          {
            path: '/faculty',
            name: 'Faculty',
          },
          {
            path: '/residentlife',
            name: 'Resident Life',
          },
          {
            path: '/2021',
            name: 'Class of 2021',
          },
          {
            path: '/2022',
            name: 'Class of 2022',
          },
          {
            path: '/2023',
            name: 'Class of 2023',
          },
          {
            path: '/alumni',
            name: 'Alumni',
          }
        ]
      }
    ],
    aboutUs: [
      {
        title: '1. Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.',
        img: 'https://images.unsplash.com/photo-1587351021772-0888b7399586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
      },
      {
        title: '2. Dolor sit amet',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.',
        img: 'https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: '3. Consectetur adipiscing elit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.',
        img: 'https://images.unsplash.com/photo-1569830904560-2afd7062213c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      }
    ],
    clinicalSites: [
      {
        title: 'Jackson Memorial Hospital',
        link: 'http://jacksonhealth.org/jackson-memorial.asp',
        shortDesc: 'Lorem ipsum simet dolor et al.',
        desc: 'Jackson Memorial Emergency Department, the main emergency department in the Jackson Health System helps make up the largest public hospital network in the nation. Jackson Memorial Hospital is a non-profit, tertiary care hospital and the major teaching facility for the University of Miami Leonard M. Miller School of Medicine. <br> <br> Located at the UM/Jackson Medical Center, the emergency department treats more than 110,000 patients each year. Jackson Memorial Hospital also serves as a receiving hospital for the Caribbean and Latin America which exposes residents to a variety of clinical cases.  Jackson’s ED is divided into 3 separate pods which each have over 20 beds. Each pod is fully equipped with personnel and medical equipment to manage and assess critically ill patients.',
        img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/51015642-fef7-4d1c-baf9-cafe4e7e65bc.jpg',
      },
      {
        title: 'Holy Cross Hospital',
        link: 'https://www.holy-cross.com/emergency-department',
        shortDesc: 'Lorem ipsum simet dolor et al.',
        desc: 'Holy Cross Hospital in Ft. Lauderdale provides residents with experience working in the community setting. The hospital is both a Stroke and STEMI center.  The patient population is largely made up of elderly patients, however residents also see a variety of pediatric patients.  PGY-2 and PGY-3 residents work shifts in ER triage, which is a fast-paced environment focusing on wounds care, fractures, and the like. <br> <br> Holy Cross Hospital functions much like many community departments where efficiency and patient experience are emphasized.  This offers residents a realistic view of the way that many departments function.    ',
        img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/5f3f7dcf-7c89-4748-b8c1-6b291d02e879.jpg',
      },
      {
        title: 'University of Miami Hospital',
        link: 'http://www.umiamihospital.com/service-lines/emergency-medicine',
        shortDesc: 'Lorem ipsum simet dolor et al.',
        desc: 'University of Miami Hospital is a 560-bed hospital located on the UM/Jackson Medical Center. Residents spend one 4-week block per year at UMH. PGY-1, residents rotate in the Medical ICU, PGY-2, the Cardiac ICU and PGY-3, the UM Emergency Department. <br> <br> On ICU rotations, residents are an integral part of the team which typically consists of an ED resident, a pulmonary/critical care fellow, and an attending. Being a part of this small team allows residents to have more hands-on experience in the ICU. <br> <br> In the UMH Emergency Department, seniors work side-by-side with the attendings. The focus is on further developing the senior residents ability to function independently in a busy academic emergency department.',
        img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/d32a0aab-4e66-43f3-af11-6d6d9db5e37f.jpg',
      },
      {
        title: 'Veterans Affairs Hospital',
        link: 'https://www.miami.va.gov/',
        shortDesc: 'Lorem ipsum simet dolor et al.',
        desc: 'One month of the PGY-1 year is spent at the Miami Veterans Health Association located on the UM/Jackson Medical Center.  The VA is the medical home for a large proportion of the medically complex veterans residing in South Florida.  This rotation offers an opportunity to spend more time with individual patients who have extensive medical comorbidities.  ',
        img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/7786e7c7-f983-4dd4-8188-1a5faea7edbc.jpg',
      },
      {
        title: 'Ryder Trauma Center',
        link: 'http://www.jacksonhealth.org/ryder.asp#gref',
        shortDesc: 'Lorem ipsum simet dolor et al.',
        desc: 'Known worldwide for its trauma care, Ryder Trauma Center is the only Level 1 trauma center in Miami-Dade County for adults and children. Founded in 1992, Ryder has been dedicated in saving the lives of people with critical injuries, treating approximately 3,600 victims of major trauma each year. <br> <br>  Ryder provides the following services to trauma victims:  resuscitation, emergency surgical intervention, intensive care, rehabilitation, and outpatient care.  Ryder also provides care to a large number of international patients transferred from the Caribbean, South America, and Central America.  As Emergency Medicine residents, we participate in the initial evaluation and resuscitation of patients, including procedural interventions under the guidance of the trauma team. We continue to manage patients while they are in the resuscitation bay until they are admitted or discharge from the center. ',
        img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/ad6ffb10-0746-4003-b569-a61be25a0c5f.jpg',
      },
      {
        title: 'Holtz Children Hospital',
        link: 'http://www.jacksonhealth.org/holtz-emergency.asp',
        shortDesc: 'Lorem ipsum simet dolor et al.',
        desc: 'Holtz Children’s Hospital, located on the UM/Jackson Medical Center is one of the largest children’s hospitals in the Southeast United States. The emergency department houses 20 beds providing for all levels of emergency care.  The ICU has 24 beds providing for critically ill kids from newborns to 21 years of age. A unique feature of Holtz is the ability to care for both local and international patients <br> <br> EM residents spend a 4-week block in the Pediatric Emergency Department each year. In addition, PGY-2 and PGY-3 residents do longitudinal shifts throughout the year.  The ED is fully staffed with residents from EM, Pediatrics, and Med-Peds. Residents spend an additional 4-week block in second year as a member of the PICU team.',
        img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/031b53dd-b23b-4c76-a9b5-93089316f95b.jpg',
      },
    ],
    residents: {
      '2020': [
        {
          name: 'Carlos Rodriguez',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Phillip Plevek',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Cameron Shoraka',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Joseph Zakaria',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Miguel Ribe',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Anna Culhane',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Oswald Perkins',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Sarah Jabre',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Jeniffer Okungbowa-Ikponmwosa',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Warren Linnerooth',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Max Rippe',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Sebastian Gil',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Robert Barry',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Andrea Alvarado',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        }
    ],
      '2022': [
        {
          name: 'Carlos Rodriguez',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Phillip Plevek',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Cameron Shoraka',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Joseph Zakaria',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Miguel Ribe',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Anna Culhane',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Oswald Perkins',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Sarah Jabre',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Jeniffer Okungbowa-Ikponmwosa',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Warren Linnerooth',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Max Rippe',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Sebastian Gil',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Robert Barry',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Andrea Alvarado',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        }
    ],
    '2021': [
      {
        name: 'Carlos Rodriguez',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Phillip Plevek',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Cameron Shoraka',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Joseph Zakaria',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Miguel Ribe',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Anna Culhane',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Oswald Perkins',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Sarah Jabre',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Jeniffer Okungbowa-Ikponmwosa',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Warren Linnerooth',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Max Rippe',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Sebastian Gil',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Robert Barry',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      },
      {
        name: 'Andrea Alvarado',
        hometown: 'Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
        img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        med: 'UMMSOM',
        why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
        favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
      }
      ],
      '2023': [
        {
          name: 'Carlos Rodriguez',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Phillip Plevek',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Cameron Shoraka',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Joseph Zakaria',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Miguel Ribe',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Anna Culhane',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Oswald Perkins',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Sarah Jabre',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Jeniffer Okungbowa-Ikponmwosa',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Warren Linnerooth',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Max Rippe',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Sebastian Gil',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Robert Barry',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        },
        {
          name: 'Andrea Alvarado',
          hometown: 'Miami, FL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
          img: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
          med: 'UMMSOM',
          why: 'I chose jackson because lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          hobbies: 'I like to lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.',
          favorite: 'My favorite thing about Miami is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.'
        }
    ]
    },
    alumni: [
      {
        name: 'Henry Zeng, MD',
        year: 'Class of 2019',
        where: 'Hospice and Palliative Medicine Fellowship at Stanford University',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Natalia Alvarez, MD',
        year: 'Class of 2019',
        where: 'Boston University School of Medicine',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Jonathan Balakumar, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Los Angeles, CA',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Peter (Martin) Sayers. MD',
        year: 'Class of 2019',
        where: 'Undersea and Hyperbaric Medicine Fellowship at Duke University',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Adam Brunson, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Emily Cooper, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Grapevine, Texas',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Marisa Gilbert, MD',
        year: 'Class of 2019',
        where: 'Neuro Critical Care Fellowship at Jackson Memorial Hospital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Daniel Hercz, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Lavern Keitt, MD',
        year: 'Class of 2019',
        where: 'Attending physician (locums) in Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Jeff Lombardo, MD',
        year: 'Class of 2019',
        where: 'Attending physician in North Miami Beach, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Marisa Gilbert, MD',
        year: 'Class of 2019',
        where: 'Jackson Memorial Hospital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Michael Roberds, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Laura Scheidt, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Miami, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Adam Sienkiewicz, MD',
        year: 'Class of 2019',
        where: 'Attending physician in Naples, FL',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Christopher Sweat, MD',
        year: 'Class of 2019',
        where: 'Medical Toxicology Fellowship at Regions Hospital',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Alexander Thai, MD',
        year: 'Class of 2019',
        where: 'Attending physician with the United States Air Force in San Antonio, TX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
      {
        name: 'Ariana Weber, MD',
        year: 'Class of 2019',
        where: 'EMS Fellowship at Boston Medical Center',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum. Praesent lacus lectus, ultrices at rhoncus et, tincidunt eu turpis. Morbi libero nunc, interdum a varius sed, gravida a enim. Integer nunc est, vulputate vitae nulla quis, hendrerit mattis odio.',
      },
    ],
    faculty: [
      {
        name: "Dr. Christopher Freeman",
        title: "MD, FACEP",
        position: "Program Director",
        img: 'freeman.jpg',
        about: {
          'Institution': "Jackson Memorial",
          'Hometown': "Utica, NY",
          'Med School': "Albany Medical College",
          'Residency': "Albany Medical College",
          'Fellowship': "",
          'Interests': "Educational Assessments and Evaluation",
          'Other': "",
        },
        
      },
      {
        name: "Dr. Mark Supino",
        title: "MD, FACEP",
        position: "Associate Program Director",
        img: 'supino.jpg',
        about: {
          'Institution': "Jackson Memorial",
          'Hometown': "Montreal, QC",
          'Med School': "NYU School of Medicine",
          'Residency': "Stroger-Cook County Hospital",
          'Fellowship': "",
          'Interests': "Uropathogens, Ultrasound, Graduate Medical Education, Process Improvement, Patient flow & metrics",
          'Other': "",
        }
        
      },
      
      {
        name: "Dr. Patricia De Melo Panakos",
        title: "MD",
        position: "Associate Program Director",
        img: 'panakos.jpg',
        about: {
          'Institution': "Jackson Memorial",
          'Hometown': "Miami, FL",
          'Med School': "University of Florida College of Medicine",
          'Residency': "Temple University Hospital",
          'Fellowship': "",
          'Interests': "Education, Public Health, HIV/HCV, Simulation",
          'Other': "",
        }
      },
      {
        name: "Dr. Isabelle St-Cyr",
        position: "Program Coordinator",
        img: 'isabelle.jpg',
        about: {
          'Institution': "Jackson Memorial",
          'Hometown': "Quebec, QC",
          'Undergraduate': "University of Montreal",
          'Fellowship': "",
          'Interests': "Medical Malpractice Avoidance",
          'Other': "",
        }
      },
          {
          name: "Dr. Jeffrey N. Bernstein",
          title: "MD, FACEP, FACMT, FAACT, DABCP",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial",
              'Hometown': "Cherry Hill, NJ",
              'Med School': "Rutgers Medical School (UMDNJ)",
              'Residency': "University of Arizona",
              'Fellowship': "Medical Toxicology/Clinical Pharmacology University of Arizona",
              'Interests': "All things Poison",
          }
        
      },
      {
          name: "Dr. Hector Chavez",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial",
              'Hometown': "Managua, Nicaragua and Sicily Island, Louisiana",
              'Med School': "University of South Florida",
              'Fellowship': "University of Minnesota, Pediatric Emergency Medicine",
              'Interests': "Pediatric EM",
          }
        
      },
      {
          name: "Dr. Armando Clift",
          title: "MD, FAAEM",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial",
              'Hometown': "Los Angeles, CA",
              'Med School': "UCLA/ Drew School Of Medicine",
              'Residency': "Los Angeles County- USC Medical Center, CA",
              'Additional Training': 'Preliminary year Internal Medicine, Mt Sinai Medical Center',
              'Interests': "EMS",
          }
        
      },
      {
          name: "Dr. Sara Cortes",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial",
              'Hometown': "Sarasota, FL",
              'Med School': "University of Miami",
              'Residency': "Jackson Memorial Pediatrics, Miami, FL",
              'Fellowship': 'New York Methodist PEM, Brooklyn, NY',
              'Interests': "Medical Education, Simulation",
          }
        
      },
      {
          name: "Dr. John A. Esin",
          title: "MD, FACEP",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial",
              'Hometown': "New York, NY",
              'Med School': "New York Medical College",
              'Residency': "Lincoln Hospital",
              'Interests': "International Health, Telemedicine",
          }
        
      },
      {
          name: "Dr. Laura Eliseo",
          title: "MD, MPH, FACEP",
          img: 'supino.jpg',
          about: {
              'Institution': "Holy Cross Hospital",
              'Hometown': "Harrison, NY",
              'Med School': "Boston University School of Medicine",
              'Residency': "Boston Medical Center",
              'Fellowship': 'Boston EMS',
              'Interests': "Public Health, EMS",
          }
        
      },
      {
          name: "Dr. Yoram Gutfreund",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Teaneck, NJ",
              'Med School': "University of Pennsylvania School of Medicine",
              'Residency': "Jacobi/Montefiore",
              'Interests': "Hyperbarics, Dive Medicine, Wilderness Medicine, Evidence Based Medicine, Resident Education",
          }
        
      },
      {
          name: "Dr. Brooke Hensley",
          title: "MD, RDMS",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Denver, CO",
              'Med School': "University of Colorado",
              'Residency': "University of California San Francisco/San Francisco General Hospital (UCSF/SFGH)",
              'Fellowship' : 'Harvard Medical School/Massachusetts General Hospital, Clinical Ultrasound',
              'Interests': "Ultrasound, Education, Women's Health, Human Trafficking survivor advocacy",
          }
        
      },
      {
          name: "Dr. Jennifer S. Jackson",
          title: "MD, FACEP",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Boca Raton, FL",
              'Med School': "George Washington University School of Medicine",
              'Residency': "Yale School of Medicine",
              'Fellowship' : 'Harvard Medical School/Massachusetts General Hospital, Clinical Ultrasound',
              'Interests': "Medical Student Education, Resident Education, QA Review - Morbidity/Mortality, Simulation, Educational Data Analytics, Curriculum Development & Design, Educational Policy, Cruise Ship Medicine",
          }
        
      },
      {
          name: "Dr. Lilly C. Lee",
          title: "MD, SM, FACEP, FAAEM",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Toronto, ON",
              'Med School': "University of Massachusetts School of Medicine",
              'Residency': "University Massachusetts Medical Center",
              'Additional Training' : 'General Surgery; Harvard Deaconess Medical Center',
              'Interests' : 'ED Operations, ED Quality of Care; Trauma',
          }
        
      },
      {
          name: "Dr. Kelly Medwid",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "West Nyack, NY",
              'Med School': "SUNY Downstate",
              'Residency': "Bellevue/NYU",
              'Fellowship' : 'Simulation Fellowship, Bellvue/NYU',
              'Interests' : 'Simulation, Education',
          }
        
      },
      {
          name: "Dr. Ivette Motola",
          title: "MD, MPH, FACEP",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Miami, FL",
              'Med School': "University of Rochester School of Medicine",
              'Residency': "Harvard Affiliated Emergency Medicine Residency (BWH/MGH)",
              'Fellowship' : 'Commonwealth/Harvard University Fellowship in Health Policy and Health Disparities',
              'Interests' : 'Education, Simulation Education, Team Training, Crisis Response, Disaster Response, EMS, Stroke',
          }
        
      },
      {
          name: "Dr. Mehruba Anwar Parris",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Queens, NY",
              'Med School': "University of Rochester School of Medicine",
              'Residency': "New York Methodist Hospital (Presbyterian) ",
              'Fellowship' : 'Medical Toxicology - Emory/CDC',
              'Interests' : 'Medical Toxicology, Public Health, HIV/HCV, Education',
          }
        
      },
      {
          name: "Dr. Leila L. PoSaw",
          title: "MD, MPH, FACEP",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Miami, FL",
              'Med School': "Duke University School of Medicine",
              'Residency': "St. Lukes-Roosevelt Hospital",
              'Fellowship' : 'Ultrasound - Mt. Sinai Hospital',
              'Interests' : 'Point of Care Ultrasound, Medical Education',
          }
        
      },
      {
          name: "Dr. Jeffrey M Scott",
          title: "DO, FACEP",
          img: 'supino.jpg',
          about: {
              'Institution': "Jackson Memorial Hospital",
              'Hometown': "Honolulu, HI & Roslyn, NY",
              'Med School': "Nova Southeastern University College of Osteopathic Medicine",
              'Residency': "Mount Sinai Medical Center",
              'Fellowship' : 'JMH-UM -Ryder Trauma Center',
              'Interests' : 'PE Team Founding member, TEE/ Cardiothoracic US, Mechanical Circulatory Support/Transplant Critical Care',
              'Other' : 'Board certified in Surgical Critical Care and Critical Care US (CCEeXAM)',
          }
        
      },
      {
          name: "Dr. R. Peter Thompson",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "Holy Cross Hospital",
              'Hometown': "Red Bank, NJ",
              'Med School': "Brody School of Medicine East Carolina University",
              'Residency': "Hennepin County Medical Center",
              'Interests' : 'Education, Simulation',
          }
        
      },
      {
          name: "Dr. Richard Zaidner",
          title: "MD",
          img: 'supino.jpg',
          about: {
              'Institution': "University of Miami Hospital",
              'Hometown': "Miami Beach, FL",
              'Med School': "University of Miami Miller School of Medicine",
              'Residency': "Boston Medical Center",
              'Interests' : 'Administration, Ultrasound',
          }
        
      },
      ],
      imageViewing: false,

  },
  getters: {
    getFaculty(state) {
      return state.faculty
    },
    getImageViewing(state) {
      return state.imageViewing
    },
    getNavMenu(state) {
      return state.navMenu
    },
    getRoutes(state){
      return state.routes
    },
    getAlumni(state) {
      return state.alumni
    },
    getResidents(state) {
      return state.residents
    },
    getAboutUs(state) {
      return state.aboutUs
    },
    getClinicalSites(state) {
      return state.clinicalSites
    },
  },
  mutations: {
    flipNav(state){
      state.navMenu = !state.navMenu
    },
    changeNav(state, val) {
      state.navMenu = val
    },
  },
  actions: {
  },
  modules: {
  }
})
