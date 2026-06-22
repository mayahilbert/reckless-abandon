// --- CONFIGURATION ---
const TEXTURE_URL = 'images/Texturelabs_Glass_135St.png';

const shelf = document.getElementById('shelf');
const cubbyData = [
  { slug: "virtual-discussion", vimeo: "https://player.vimeo.com/video/1190479860?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/cyber-chiffon.jpg", title: "virtual DISCussion", artist: "cyber//chiffon (Taylor Elise Colimore + Noren G-H)", medium: "Video", year: "2025", description: "<p>The film begins with \"muzzled\" centering on feelings of madness and rage conjured by being trapped by the perception of others.</p><p>Transiting next into \"I ENDURE WITH A TENSE PULSE\" the video builds from sustained unsettled movement to an explosive climax, communicating frustration with unsolicited attention.</p><p>The film concludes with \"virtual DISCussion,\" a two channel collaborative video combining audio, assets, and footage from the previous sections. Referencing the circular frame from the beginning video, the artists overlap motifs such as plaid and grid, shades of pink, and the figure, thus bringing the two videos into conversation and showcasing the different yet complementary perspectives of the two artists.</p>", bio: "<p>The artist collective, cyber//chiffon, is Taylor Elise Colimore and Noren G-H. Taylor Elise Colimore (she/her) is a multimedia artist, born in Baltimore, Maryland, and currently living in Richmond, Virginia, with a visual art practice consisting of both digital and analog art making techniques. Colimore graduated summa cum laude from Virginia Commonwealth University with a B.F.A. in Kinetic Imaging. Noren G-H (they/them) is an interdisciplinary artist located in Richmond, Virginia, making work that navigates identity, time, and interaction. G-H graduated summa cum laude from Virginia Commonwealth University with a B.F.A in Kinetic Imaging with minors in Sculpture and Art History. Coming together and pulling from their time-based fine arts background, they explore the intersection of classical craft and emerging media technologies with the joint desire to communicate their inner truths.</p>", ig: "https://www.instagram.com/cyberchiffon/" },
  { slug: "how-not-to-drown", vimeo: "https://player.vimeo.com/video/1191944962?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/hahn.jpg", title: "How Not to Drown", artist: "Alexander Hahn", medium: "Drawings, sketches, and unfinished 3D computer animation", year: "2026", description: "<p><em>How Not to Drown</em> is a short experimental video that unfolds as a forensic reconstruction—assisted by AI—of a long-abandoned project from the 1970s and 1990s. The origins of the work reach further back than initially assumed: to a linoleum floor that, seen through a black-and-white video camera, appeared as an aerial view of an ocean, traversed by reflections of light.</p><p>At the centre of the project is a Vogue article found in Venice in the late 1970s, entitled <em>Six mouvements pour vous sauver - Six Movements to Save You</em>, instructions on how to avoid drowning. Over the years, its illustrations inspired drawings, watercolours, swimming experiments, underwater footage, and eventually an unfinished 3D animation featuring a rigged digital figure.</p><p>Mythological, technological, and personal narratives overlap: Daedalus warning Icarus; software instructions controlling a digital skeleton; misunderstandings that transform survival movements into \"water ballet\"; and ageing videotape signals that disintegrate and collapse during playback.</p><p>In retrospect, the six instructions appear less as a swimming technique than as a modest guide to staying afloat: prepare the body, push off, stretch out, glide, move forward with care, relax—and recover.</p><p>Postscript: After completing the project, I attempted to restart my laptop. It remained unresponsive. It is currently in repair. The diagnosis: water damage.</p>", bio: "<p>Alexander Hahn is a media artist working with video, installation, computer graphics, and print. Since the late 1970s, he has explored how images emerge from noise, memory, and technological mediation. His work often begins with fragments—found photographs, field recordings, scientific data, or obsolete media—and transforms them through digital processes such as 3D modeling, CGI, and AI-based image generation. Hahn frequently moves images between immaterial and material forms, translating digital sources into installations, moving images, and large-format prints. Recurring themes include perception, chance encounters, and the unstable relationship between image and reality. His projects connect distant places and systems of knowledge, from urban street observations to geological and cosmic imagery. Hahn's work has been exhibited internationally in museums, galleries, and public spaces, and continues to investigate how technological tools shape the way we remember, imagine, dream and see the world.</p>", website: "alexanderhahn.com", ig: "https://www.instagram.com/lxhahn1/" },
  { slug: "soiled-dreams", vimeo: "https://player.vimeo.com/video/1044380513?h=8a76ae8049", image: "images/key/JPEG/hendrickson.jpg", title: "Soiled Dreams", artist: "Elle w Hendrickson ", medium: "Video", year: "2024", description: "<p>A video meeting, afternoon romp, and collective improvisation lamenting the death of science made on a sunny afternoon in residence at The Soil Factory, Ithaca on the site of The Marshy Garden, a future food forest and possible carbon sequestration project.</p>", bio: "<p>ELLE HENDRICKSON IS AN INTERDISCIPLINARY ARTIST BASED BETWEEN CASEY COUNTY AND LOUISVILLE, KENTUCKY. THEIR WORK BRIDGES PERFORMANCE AND VISUAL ART, OFTEN MERGING COLLABORATIVE, RESEARCH-BASED PROCESSES WITH PAINTING, INSTALLATION, AND MOVING IMAGE. CURRENT PROJECTS EXPLORE THE ECOLOGICAL CRISIS, HUMAN PERCEPTION, AND THE METAMORPHIC SUBLIME.</p>" },
  { slug: "what-did-you-eat-yesterday", vimeo: "https://player.vimeo.com/video/1193134438?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/jin.jpg", title: "What Did You Eat Yesterday?", artist: "Janice Jin", medium: "Video", year: "2026", description: "<p><em>What Did You Eat Yesterday?</em> is an experimental short film that transforms the remnants of everyday consumption into reflections on waste, time, and memory. The film begins with static images of discarded food packaging, such as sardine tins, wrappers, and pizza boxes, focusing not on the act of eating itself, but on what remains after it is over.</p><p>As the film progresses, the discarded objects begin to glitch, shift positions, and reappear in altered arrangements. These subtle disruptions suggest the passing of time and the gradual fading of memory. A recurring bell sound acts as a quiet marker of temporal movement, reinforcing the feeling that these once-familiar objects are slowly becoming forgotten.</p><p>Eventually, all of the discarded materials gather together within a single frame, resembling the accumulation of waste within a dumpster or landfill. Leaves begin to cover the objects, hinting at decomposition.</p><p>At its core, <em>What Did You Eat Yesterday?</em> takes a simple everyday question and reframes it into something more reflective: not only asking what was consumed, but also what was left behind. Through ordinary discarded objects, the film examines how traces of daily life quietly disappear over time.</p>", bio: "<p>Janice Jin is a visual artist and filmmaker living in New York City. Her work explores cycles, repetition, minimalism, and abstract symbolism. Through visual experimentation and controlled color palettes, she creates film works that blur narrative and abstraction.</p><p>Her recent films have screened at international video art and independent film platforms. Alongside filmmaking, she develops media art and loves experimenting with different moving-image practices.</p>" },
  { slug: "legs-escape", vimeo: "https://player.vimeo.com/video/1199088742?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/kuo.jpg", title: "Legs Escape", artist: "Nina Kuo", medium: "Video", year: "2015", description: "<p>Multilayer legs tease us as we escape into a stream of consciousness:  visions of fishnet snake legs are dancing as we channel a refuge for emotional relief as feminist women experience since my own family sojourned here to a a new America. These inspired forms by abstracted artists (Shigeko Kubota, Jonas Mekas, Man Ray, etc.) present floating memories pay tribute to these dreams from distant experiences: these legs and fish-like creatures help us to escape into a fictional refuge where distinctive expressions can be created and felt. There is a ritualistic form that channels raw emotion and free us from the anxiety of global worlds. We are tracking a journey from the figurative to the abstraction making subjective experiences by introducing choreographed performers with sound compositions dramatically show. These intrinsic fragile legs form an organic bridge to a reality as a fascination with montaged cinemas interject our mind with futuristic possibilities.</p>", bio: "<p>Nina Kuo is a photographer, painter, sculptor and video artist. Her work ranges from cross-temporal cultural vignettes to complex abstract shapes and forms. She made works dealing with Feminism and Asian American Identity  as a purposeful manner of expression.</p><p>She claims \"improvisation of Asiatic Diaspora can dramatize this pageantry of how I created reflections of our invented worlds. Exposed futuristic world of fighting for progress or change. We must create buildings that connect past and present in the habitats that arise is a solution to the many community curiosities of our American past. Having lived in multiplistic urban worlds- parallels of positive change can occur even if I call them jungles.</p><p>Representing multi-Asian American immigrants, it was an honor to be Featured in \"On This Spot\" Anthology Archives screening of Godzilla Women’s Artist collective. I encourage architects to form new structures that can utilize inventive fantasy architecture how we need more inspiring community and relate to our past as well.  We are celebrating the many decades of how we dialogue among generations and multi-ethnic groups that work for new futures through great staff involvement.</p><p>Art from recent past inform the future heroic portraits by Nina Kuo who has illustrated the support for the community: that are simple and adorned expressions of art make us feel elated and confident. Past experience in public mural design was with art makers, ACC video wall - Chelsea pier 2017, See photo hand tinted mural -Spring Street station, hand colored on wood panel for public viewing, . In early teaching career: worked at many Art centers and galleries. (Gallery 91, ICP, Gugg., Mus, Met Museum, Nysca,, Art Therapy for disabled, Parco Magazine etc.)</p><p>Nina Kuo has made designs suited to  noted community, cultural and nonprofits. She has made painted murals with the disabled photo galleries, In  2021 she made a public Saved Art Space \“huge street billboard West Coast, depicting a anti-domestic violence Statement with zoom panels comprised of social workers and artists from under privileged working class areas with solutions to healing for victims.\"</p>", website: "https://mythicalmuse.com/" },
  { slug: "be-happy", vimeo: "https://player.vimeo.com/video/1199088741?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/ladislas.jpg", title: "Be Happy", artist: "Robert Ladislas Derr", medium: "Video", year: "2023", description: "<p>With a dental cheek retractor forcing my mouth into a smile, I fill my mouth and cover my face with Reddi-Wip Cream, then speak “be happy” 139 times. This durational performance recognizes one of the meanings of 139, which presages impending change. The end of something and the beginning of another whether good or bad. These uncertain times prompt this action.</p>", bio: "<p>Robert Ladislas Derr is a visual artist making performance art from live to intervention, videos, photographs, and multimedia installations. He has exhibited and performed widely at such venues as, the Riga Performance Festival (Latvia), SomoS Art House (Germany), Black Mountain College Museum + Arts Center (US), Canberra Contemporary Art Space (Australia), Mendel Art Gallery (Canada), Schirn Kunsthalle Frankfurt (Germany), Wexner Center for the Arts (US), LIVE Performance Art Biennale (Canada), and Irish Film Institute (Ireland).</p>", website: "http://robertladislasderr.com/" },
  { slug: "rolling-piece", vimeo: "https://player.vimeo.com/video/1190481791?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/laguna.jpg", title: "Rolling Piece", artist: "Angelina Laguna", medium: "Video", year: "2025", description: "<p>Outside the Headquarters to the United Nations on 1st Ave, <em>Rolling Piece</em> was performed on March 10th 2025 at 1pm EST. The audience was invited to view the performance via a livestream and in-person spectators were by happenstance. The cast of <em>Rolling Piece</em> includes performers Jeff Natt, Lindsay Brents and myself; a stage manager Zool Zulkowitz;  videographers Alec Hawkins, Nathan Williams, and Rosa Allegra Wolff; and invited spectator Yoshiko Chuma. The structure involved me lying on the pavement and rolling from one end of the campus to the other, past the 193 member nations flags and 2 non-member nation flags. Two performers walked with me, protecting and guiding my body. Unsurprisingly, the score was interrupted by authority figures 20 minutes into the piece. Following the plan, I waited on the pavement until my arrest was threatened. This concluded the performance. This video footage by Alec Hawkins is a chronological documentation of the piece. </p>", bio: "<p>Angelina Laguna is an independent dance artist working in New York City. After receiving a BFA in dance from Purchase College, she has performed multiple restaged works by Merce Cunningham and worked with artists such as Liz Gerring, Cherrie Yu, John Heginbotham, and Yoshiko Chuma and the School of Hard Knocks. Laguna has also worked for and alongside, visual artists, musicians, activists, lawyers, and table tennis champions, among other New York professionals and residents. She has performed her own work in studios, on stages, and on sidewalks.</p><p>Laguna maintains physical practices of ballet, Cunningham technique, and the classical Pilates method. Additionally, she is involved with the Cabrini Immigrant Services Food Pantry, working in manual labor and fundraising, and with various anti-war groups across the city. These practices shape her performances.</p>", ig: "https://instagram.com/angelina_laguna", website: "angelinalaguna.cargo.site" },
  { slug: "therapy-room", vimeo: "https://player.vimeo.com/video/1199088744?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/larrosa.jpg", title: "Therapy Room", artist: "Ivana Larrosa", medium: "Video", year: "2026", description: "<p><em>Therapy Room</em> investigates my experience of space as the consequence of a car accident that left me with permanent double vision. Based on my first Eye Movement Desensitization and Reprocessing (EMDR) therapy session, this exploration offers insight into the human psyche, connecting to memory through vision. Can you describe something that you can never see but you notice is there? Memory is continually active, continually moving, continually holding things in a circle around itself.</p>", bio: "<p>Ivana Larrosa is a visual artist from Spain living in New York City. She works primarily with photography, video and performance. Her work has been shown at at Art venues and Museums including Anthology Film Archives, International Center of Photography, The Arthur L. Carter Journalism Institute of New York University, The Exponential, Queens Museum, The Center for Fine Art Photography, Project Space Kleiner Salon, Accademia di Belle Arti di Brera, and Galeria Sicart, among others. Larrosa's work is at the permanent collection of Foundations, Museums, Institutions and Collections such as Bassat Private Collection, Spanish National Museum of Sculpture, and video art platform PerformVu/ Lucid.</p><p>Ivana Larrosa has received several grants such as City Artist Corps Grant of New York, Lluís Carulla Foundation Individual Artist Grant, and Museum of Tortosa Artist in Residency, and numerous awards, including Ramon Aloy International Photographic Award and Camera Club of New York Baxter St, Annual Juried Competition.</p>", ig: "https://www.instagram.com/ivanalarrosa/" },
  { slug: "memorial-for-bad-jokes", vimeo: "https://player.vimeo.com/video/1202899619?autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", image: "images/key/JPEG/memorial.jpg", title: "Memorial For Bad Jokes", artist: "Kathleen McDermott", medium: "Wearable machines, video and editing by Kathleen McDermott. Sound design by Senem Pirler. 4 minute loop", year: "2016", description: "<p><em>Memorial For Bad Jokes</em> is an exploration of the relationship between mortality and electricity, a dynamic yet non-organic force. The constructed environment within the video functions as a purgatory and as an absurdist procession performed to the rhythms created by a cast of strange wearables, each of which is performed by the artist.</p><p><em>\"I Thought It Would Be Funny,\"</em> is a death shroud made of LED lights, pulsing based on a simple timing circuit. Time is also kept by <em>\"The Little Drummer Boy,\"</em> a motorized drum stick strapped around the artist's waist, and <em>\"The Public Speaker,\"</em> a shawl covered in speakers that plays a recording of the artist screaming. <em>\"The Social Escape Dress,\"</em> passes through, emitting a cloud of fog through a wearable system of vaporizers and aquarium pump motors.</p>", bio: "<p>Kathleen McDermott is an interdisciplinary artist with a background in installation, prop-making and sculpture, based in Brooklyn, NY. She combines her knowledge of fabrication with open source hardware to build a language of absurdity that merges new media, design, performance, and video. She is interested in unproductive technologies that extend and highlight embodied knowledge, and that resist control. Her work has been exhibited internationally, including at the Museum of Arts and Design in New York, The Tides Institute and Museum of Art in Maine, the Wende Museum in LA, and Ars Electronica in Linz, Austria; and has been featured in publications such as The Wall Street Journal, Huffington Post, Fast Company, and Dezeen.</p>", ig: "https://www.instagram.com/kit_the_robot", website: "https://kthartic.com/" },
  { slug: "hello-its-you", worklink: "https://mitraavrs.neocities.org", image: "images/key/JPEG/mitra.jpg", title: "Hello - It's You", artist: "Mitra", medium: "Website (Neocities)", year: "2025", description: "<p><em>Hello – It’s You</em> is an immersive exploration of memory and self-discovery, merging illustrations and text in the form of an ARG-like hypertext adventure. This project invites the viewer to navigate a dynamic, nonlinear journey, where fragments of the past and present interact, revealing the complexities of personal identity. Through this fusion of visual storytelling and textual exploration, <em>Hello – It’s You</em> engages the audience in a dialogue about how memory shapes who we are, and how the act of revisiting those memories becomes a path to understanding the self.</p>", bio: "<p>MITRAAVRS is a multimedia artist and educator exploring memory, identity disturbance and nonlinear narratives through hypertext and experimental web-based formats. Born in India and raised across Oman and Dubai before relocating to the United States at twenty-three, their transnational upbringing shapes an interest in shifting selves and unstable temporalities within narrative form. Holding a BFA in 3D Modeling and Animation from SAE Institute Dubai, they merge illustration and creative coding to build hybrid narrative spaces and interactive systems. They have exhibited work with New Bedford Arts Illuminated and Hatch Street Studios.</p><p>MITRAAVRS has also worked as a Gallery Assistant and currently servers as a Teaching Fellow at UMass Dartmouth, suporting students in developing foundational digital media skills.</p>", ig: "https://www.instagram.com/mitraavrs", website: "https://mitraavrs.carrd.co" },
  { slug: "a-stabilizing-loop", vimeo: "https://itch.io/embed/1038681", worklink: "https://aaronoldenburg.itch.io/loop", image: "images/key/JPEG/oldenburg.jpg", title: "A Stabilizing Loop", artist: "Aaron Oldenburg", medium: "Software (web-based or local application download)", year: "2023", description: "<p>Layers of hand-drawn images taken from my own past photography of anonymized friends and family and images of extinct animal and plant species are given chance combinations via autonomous real-time software. The environments created in these vignettes are unpredictable and often chaotic. The figures are both overwhelmed by this and participate in it.</p><p>The elements that make up the collage were chosen as they aligned with a sense of uncertainty and loss. There is a feeling for me, in the collision of the semi-random images, of the chaos of earth in a period of late humankind. It is the momentum of natural disasters birthed from our energy usage. It is a constant state of rupture interspersed with moments of new equilibria.</p><p>My mediums tend to be videogames, interactive and non-interactive procedural software, and video, with the latter often using the former as material.  Simulations of instability, the overwhelming power of nature, post-human worlds and dissociation are themes I lean toward. They all come from a similar place, even if they produce different results. All of them can be seen as a form of rupture with our assumed control over our world and reality. There’s a spiritual element of letting go or riding the discomfort.</p>", bio: "<p>Aaron Oldenburg is a Baltimore-based game, interactive and video artist. His work has exhibited in festivals and galleries in New York, Johannesburg, London, Buenos Aires, São Paulo and Los Angeles, including SIGGRAPH, A MAZE. International Games and Playful Media Festival, the LeftField Collection at EGX Rezzed, Slamdance DIG, Game On! - El arte en el juego, and FILE Electronic Language International Festival. His games have been written about in Kill Screen, Baltimore City Paper, BmoreArt, and Rock, Paper, Shotgun.</p><p>He teaches game design as a professor in The University of Baltimore's Simulation and Game Design program and has an MFA from the University of Maryland, Baltimore County. His writing on games has been published in Game Studies, Journal of Gaming and Virtual Worlds, Hyperrhiz, Acta Ludologica, and the proceedings of the International Symposium on Electronic Art (ISEA). In October 2003 he finished two years as an HIV Health Extension Agent for the Peace Corps in Mali.</p>", website: "https://aaronoldenburg.itch.io" },
  { slug: "desire-paths-for-wikipedia", worklink: "https://greasyfork.org/en/scripts/565058-desire-paths-for-wikipedia", image: "images/key/JPEG/pipkin.jpg", title: "Desire Paths for Wikipedia", artist: "Everest Pipkin", medium: "Browser extension userscript", year: "2026", description: "<p><em>Desire Paths for Wikipedia</em> is a browser userscript that remembers the path of a cursor over the linked pages of Wikipedia.org. It averages these paths and “wears” them into the page, showing your browsing history over time. Return to a page months or years later and find not just that you had been there before, but exactly how you wandered.</p><p>With thanks to Kate Compton and Christina Cuneo, with whom this idea emerged in conversation.</p>", bio: "<p>Everest Pipkin is a game developer, artist, and educator who works in games and software tools across the handmade web—as well as on paper through books, zines and drawings. They have shown and spoken at The Design Museum of London, The Texas Biennial, The XXI Triennale of Milan, The Photographers Gallery of London, Center for Land Use Interpretation, and currently teach game design at the Pratt Institute. They believe the internet is a public good, and the post office should operate it.</p>", ig: "https://www.instagram.com/everestpipkin/", website: "https://everest-pipkin.com/" },
  { slug: "www-blairs-computer", worklink: "https://www.blairs.computer", image: "images/key/JPEG/simmons.jpg", title: "www.blairs.computer", artist: "Blair Simmons", medium: "Website", year: "2025", description: "<p>So I have decided I want my computer to forget, to delete, like I do. I want to move on. In this series of work, I utilize my personal digital archive to explore the relationship between my human and digital memories –  digital memory as a prosthetic extension of my human memory. www.blairs.computer is a website that asks visitors of the site to take and hold onto my files, so that I can delete them from my drive. <a href=\"https://www.blairsimmons.com/portraits\">Archive of Digital Portraits Cast in Concrete</a> is an ongoing series of sculptures made of discarded personal computing devices from myself and people in my life. These sculptures are cast in concrete, making the data permanently inaccessible.</p>", bio: "<p>I am a queer and anxious artist, curator, researcher, storyteller, and technician working in as many mediums as will have me. I enjoy exploring themes of technology, labor, bodies, and pain. My physical process of making mimics the daily pain of working and labor: warping, distorting, grinding and wearing down. My pieces are both critical of and dependent on technology, mirroring the ways technology can be a solution to my chronic pain, and the source of the pain itself.</p><p>I am currently teaching at the Interactive Media Arts and Interactive Telecommunications Program at New York University. My research often materializes as objects and performances which have been performed at the likes of Pioneer Works, La Mama’s CultureHub, Wordhack at Babycastles, theBlanc and the Edinburgh Fringe Festival. I have been mentioned in publications like PARtake, The Scotsman, USA Today, The Guardian, NYTimes, etc.</p>", website: "https://www.blairsimmons.com" },
  { slug: "photo-news", vimeo: "https://player.vimeo.com/video/967244235?h=8d82c6d042", image: "images/key/JPEG/zellen.jpg", title: "Photo News", artist: "Jody Zellen", medium: "Video", year: "2019-2026", description: "<p><em>Photo News</em>, January 1, 2019 – present, is an ongoing project consisting of daily Instagram posts of digital collages that combine news images from lead stories, juxtaposed with excerpts from the headline that accompanies each chosen photograph. This ever changing but always familiar cacophony of headlines and images gives voice to the uniquely fragmented realities we now inhabit. The project can be viewed daily on <a href=\"https://www.instagram.com/photonews5\">Instagram</a>. At the end of each year, Zellen compiles a film containing that years collages. She has completed a composite film that presents the first six years of the project.</p>", bio: "<p>Jody Zellen is a Los Angeles based artist who works in many media simultaneously. She makes animations, interactive installations, app art, net art, drawings, paintings, photographs, public art, and artists' books. She constantly thinks about ways to use new technologies and to integrate interactivity into her artworks.</p><p>Zellen received a BA from Wesleyan University (1983), a MFA from CalArts (1989) and a MPS from NYU's Interactive Telecommunications Program (2009). </p><p>Her work has been included in more than 500 group exhibitions and festivals since the late 1980s and is in the collections of the Los Angeles County Museum of Art, The Whitney Museum of Art, The Getty Museum, The Museum of Modern Art, New York, The San Francisco Museum of Art, The Laguna Art Museum, The Orange County Museum of Art as well as in numerous private collections.</p>", ig: "https://instagram.com/photonews5", website: "https://www.jodyzellen.com" },
  { slug: "curatorial-statement", image: "images/blue.png" },
  { slug: "random" }
];

// Generate the 16 cubbies
for (let i = 0; i < 16; i++) {
  const cubby = document.createElement('a');
  cubby.className = 'cubby';
  cubby.setAttribute('aria-label', `View details for item ${i + 1}`);
  const data = cubbyData[i] || { link: "#", title: `Project ${i + 1}`, description: "Details about this project...", image: "" };

  cubby.href = `?${data.slug}`;
  cubby.style.setProperty('--proj-image', "url('" + data.image + "')");
  cubby.dataset.index = i;

  let contentHtml = `<div class="face back"></div><div class="face top"></div><div class="face bottom"></div><div class="face left"></div><div class="face right"></div><div class="face front"></div>`;

  if (i === 15) {
    cubby.innerHTML = contentHtml + `
      <div class="content" style="background:none; box-shadow:none;">
        <model-viewer class="magic-8-ball"
  src="images/8ball.glb" 
  alt="3D 8 Pool Ball" 
  id="shelf-eight-ball"
>
</model-viewer>
      </div>`;
    //} else if (i === 14) {
    //  cubby.innerHTML = contentHtml;
  } else {
    cubby.innerHTML = contentHtml + `<div class="content"></div>`;
  }

  shelf.appendChild(cubby);
}

// Scratch-off Canvas Setup
const canvas = document.getElementById('erase-canvas');
const ctx = canvas.getContext('2d');

const textureImg = new Image();
textureImg.crossOrigin = 'anonymous';
textureImg.src = TEXTURE_URL;


canvas.style.filter = 'url(#spray-life)';

function initCtx() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // White base
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.95;
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Texture overlay
  if (textureImg.complete) {
    ctx.globalAlpha = 0.3;
    ctx.drawImage(textureImg, 0, 0, canvas.width, canvas.height);
  }

  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = 'black';

  const fontSize = Math.max(60, canvas.width * 0.17);
  ctx.font = `${fontSize}px 'Rubik Spray Paint', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Reckless', canvas.width / 2, canvas.height / 2.8);
  ctx.fillText('Abandon', canvas.width / 2, canvas.height / 1.4);

  ctx.globalCompositeOperation = 'destination-out';
  ctx.globalAlpha = 1.0;
}

const turb = document.getElementById('turb');
let t = 0;
(function tick() {
  t += 0.06;
  turb.setAttribute('baseFrequency',
    (0.12 + Math.sin(t * .71) * .004 + Math.sin(t * 1.37) * .002).toFixed(4) + ' ' +
    (0.15 + Math.cos(t * .53) * .005 + Math.cos(t * 1.09) * .002).toFixed(4)
  );
  requestAnimationFrame(tick);
})();

Promise.all([
  textureImg.decode(),
  document.fonts.ready
]).then(() => {
  initCtx();
});

window.addEventListener('resize', initCtx);

const CORE_SIZE = 80;
let lastPoint = null;

function erase(currX, currY) {
  if (!lastPoint) {
    lastPoint = { x: currX, y: currY };
    return;
  }
  ctx.globalCompositeOperation = 'destination-out';
  ctx.globalAlpha = 0.8;
  ctx.lineWidth = CORE_SIZE;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(currX, currY);
  ctx.stroke();
  lastPoint = { x: currX, y: currY };
}

// 3D Shelf Rotation Setup
const scene = document.getElementById('scene');
let rotX = -15, rotY = 30, startX, startY, isMouseDown = false;

function rotateShelf(x, y) {
  rotY += (x - startX) * 0.4;
  rotX -= (y - startY) * 0.4;
  rotX = Math.max(-80, Math.min(80, rotX));
  scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  startX = x; startY = y;

  const shelfAngleY = rotY; // Replace with your exact shelf angle variable name
}

let mouseX = 0, mouseY = 0;

let currentHoveredCubby = null; // Track the currently hovered cubby globally

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  requestAnimationFrame(() => {
    erase(mouseX, mouseY);
  });

  if (isMouseDown) {
    rotateShelf(mouseX, mouseY);
  } else {
    // --- HOVER LOGIC START ---
    canvas.style.pointerEvents = 'none';
    const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
    canvas.style.pointerEvents = 'auto';

    let cubby = null;
    if (elementUnderMouse) {
      cubby = elementUnderMouse.closest('.cubby');
    }

    // FALLBACK GEOMETRY SCAN: If elementFromPoint misses due to 3D matrix depth distortions
    if (!cubby) {
      const allCubbies = document.querySelectorAll('.cubby');
      for (let c of allCubbies) {
        const rect = c.getBoundingClientRect();
        if (
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom
        ) {
          cubby = c;
          break;
        }
      }
    }

    if (cubby !== currentHoveredCubby) {
      if (currentHoveredCubby) {
        currentHoveredCubby.classList.remove('hovered');
      }

      if (cubby) {
        cubby.classList.add('hovered');
      }

      currentHoveredCubby = cubby;
    }
    // --- HOVER LOGIC END ---
  }
});
canvas.addEventListener('mouseleave', () => {
  if (currentHoveredCubby) {
    currentHoveredCubby.classList.remove('hovered');
    currentHoveredCubby = null;
  }
});
// Interactive Clicking Logic via Canvas Projection
canvas.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  lastPoint = { x: e.clientX, y: e.clientY };

  canvas.style.pointerEvents = 'none';
  const clickedElement = document.elementFromPoint(e.clientX, e.clientY);
  canvas.style.pointerEvents = 'auto';

  // Safely look up the tree even if they click structural decoration fragments
  let cubby = clickedElement ? clickedElement.closest('.cubby') : null;
  if (!cubby) {
    const allCubbies = document.querySelectorAll('.cubby');
    for (let c of allCubbies) {
      const rect = c.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        cubby = c;
        break;
      }
    }
  }

  if (cubby) {
    const index = parseInt(cubby.dataset.index, 10);

    if (index === 15) {
      openEightBallOracle();
    } else if (index === 14) {
      curatorialPanel.classList.add('open');
      curatorialPanel.classList.remove('hidden');
    } else {
      openProjectOverlay(index);
    }
  }
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
  lastPoint = null;
});

// Touch Support
canvas.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  lastPoint = { x: t.clientX, y: t.clientY };
});

canvas.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  erase(t.clientX, t.clientY);
}, { passive: false });

canvas.addEventListener('touchend', () => lastPoint = null);

function openProjectOverlay(index,
  pushToHistory = true,
  useTransition = true) {
  const data = cubbyData[index] || { title: `Project ${index + 1}`, description: "Details about this project...", image: "" };
  const cubby = document.querySelector(`.cubby[data-index="${index}"]`);
  const contentDiv = cubby ? cubby.querySelector('.content') : null;

  document.querySelectorAll('#eight-ball-overlay').forEach(el => {
    el.style.viewTransitionName = '';
  });

  const updateDOM = () => {
    console.log('inside updateDOM',
      [...document.querySelectorAll('*')]
        .filter(el => getComputedStyle(el).viewTransitionName === 'proj-expand')
    );

    const overlay = document.getElementById('overlay');
    const modalTitle = document.getElementById('modal-title');
    const projArtist = document.getElementById('proj-artist');
    const projInfo = document.getElementById('proj-info');
    const modalBody = document.getElementById('modal-body');

    if (modalTitle) modalTitle.textContent = data.title;
    if (projArtist) projArtist.innerHTML = `${data.artist}`;
    if (projInfo) projInfo.innerHTML = `${data.medium}, ${data.year}`;

    if (data.worklink && modalBody) {
      modalBody.innerHTML = `
        <a class="work-link" target="_blank" href="${data.worklink}"><div class="link-container proj-expand" style="background-image: url('${data.image}')"> <span class="highlight">Click to visit the work</span><br><span class="link-note">Opens in new tab</span>
        </div></a>
        <div class="modal-desc">
        <h3>About the work</h3>
          ${data.description.replace(/\n/g, '<br>')}
        </div>
        <div class="modal-bio">
          <h3>Artist Bio</h3>
          ${data.bio.replace(/\n/g, '<br>')}
        </div>
        <div id="socials"></div>
      `;
    }
    else if (data.slug === "memorial-for-bad-jokes" && modalBody) {
      modalBody.innerHTML = `
      <div id="bg-grid" class="gif-bg-grid"></div>
      <div class="vid-container proj-expand mem-vid" style="background-image: url('${data.image}');">
        <iframe src="${data.vimeo}"
          frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

        <div class="modal-desc">
        <h3>About the work</h3>
          ${data.description.replace(/\n/g, '<br>')}
        </div>
        <div class="modal-bio">
          <h3>Artist Bio</h3>
          ${data.bio.replace(/\n/g, '<br>')}
        </div>
        <div id="socials"></div>
      `;
      startGifBg();
    } else if (data.slug === "photo-news" && modalBody) {
      modalBody.innerHTML = `
        <div class="vid-container proj-expand vid-4-5" style="background-image: url('${data.image}')">
        <iframe src="${data.vimeo}"
          frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
        <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/photonews5/embed/" allowtransparency="true" allowfullscreen="true" frameborder="0" height="500" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
        <div class="modal-desc">
        <h3>About the work</h3>
          ${data.description.replace(/\n/g, '<br>')}
        </div>
        <div class="modal-bio">
          <h3>Artist Bio</h3>
          ${data.bio.replace(/\n/g, '<br>')}
        </div>
        <div id="socials"></div>
      `;
    }
    else if (modalBody) {
      modalBody.innerHTML = `
        <div class="vid-container proj-expand" style="background-image: url('${data.image}')">
        <iframe src="${data.vimeo}"
          frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
        <div class="modal-desc">
        <h3>About the work</h3>
          ${data.description.replace(/\n/g, '<br>')}
        </div>
        <div class="modal-bio">
          <h3>Artist Bio</h3>
          ${data.bio.replace(/\n/g, '<br>')}
        </div>
        <div id="socials"></div>
      `;
    }

    const modalSocials = document.getElementById('socials');

    if (data.website) {
      const website = `<a class="social website" href="${data.website}">Website</a>`;
      modalSocials.insertAdjacentHTML('beforeend', website);
    }

    if (data.ig) {
      const ig = `<a class="social ig" href="${data.ig}">Instagram</a>`;
      modalSocials.insertAdjacentHTML('beforeend', ig);
    }
    const hero =
      modalBody.querySelector('.vid-container') ||
      modalBody.querySelector('.link-container');

    if (hero) {
      hero.style.viewTransitionName = 'proj-expand';
    }
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('no-scroll');

    if (overlay) overlay.offsetHeight;
    console.log(
      'end updateDOM',
      [...document.querySelectorAll('*')]
        .filter(el => getComputedStyle(el).viewTransitionName !== 'none')
        .map(el => ({
          tag: el.tagName,
          cls: el.className,
          vt: getComputedStyle(el).viewTransitionName
        }))
    );
  };

  if (
    useTransition &&
    document.visibilityState === 'visible' &&
    document.startViewTransition
  ) {
    console.log('before transition',
      [...document.querySelectorAll('*')]
        .filter(el => getComputedStyle(el).viewTransitionName === 'proj-expand')
    );
    const transition = document.startViewTransition(updateDOM);
    transition.finished.finally(() => {
    });
  } else {
    updateDOM();
  }

  if (pushToHistory) {
    history.pushState({ type: "project", slug: data.slug }, "", `?${data.slug}`);
  }
}

function closeProjectOverlay(pushToHistory = true,
  useTransition = true) {
  const projectParam = window.location.search.substring(1);
  let contentDiv = null;

  if (projectParam === 'memorial-for-bad-jokes') {
    stopGifBg();
  }

  if (projectParam) {
    const index = cubbyData.findIndex(item => item.slug === projectParam);
    if (index !== -1) {
      const cubby = document.querySelector(`.cubby[data-index="${index}"]`);
      if (cubby) contentDiv = cubby.querySelector('.content');
    }
  }

  // Strip transition names from the modal elements BEFORE capturing the new state

  document.querySelectorAll('.content').forEach(el => el.style.viewTransitionName = '');

  const updateDOM = () => {
    const overlay = document.getElementById('overlay');

    if (overlay) {
      overlay.classList.remove('active');
    }

    document.body.classList.remove('no-scroll');

    const modalBody = document.getElementById('modal-body');
    if (modalBody) {
      modalBody.innerHTML = '';
    }

    if (contentDiv) {
      contentDiv.style.viewTransitionName = 'proj-expand';
    }
  };

  if (
    useTransition &&
    document.visibilityState === 'visible' &&
    document.startViewTransition
  ) {
    console.log(
      'close old state',
      [...document.querySelectorAll('*')]
        .filter(el => getComputedStyle(el).viewTransitionName !== 'none')
        .map(el => ({
          tag: el.tagName,
          cls: el.className,
          vt: getComputedStyle(el).viewTransitionName
        }))
    );
    const transition = document.startViewTransition(updateDOM);

    transition.finished
      .catch(() => {
        // Silently catch rejections if the transition is skipped
      })
      .finally(() => {
        // Final fallback cleanup ensures everything is released
        if (contentDiv) contentDiv.style.viewTransitionName = '';


      });

  } else {
    updateDOM();
    if (contentDiv) contentDiv.style.viewTransitionName = '';
  }

  if (pushToHistory) {
    history.pushState(null, "", window.location.pathname);
  }
}

function handleGlobalAppRouting(pushToHistory = false) {

  const queryParam = window.location.search.substring(1);

  // Wrap the state switches inside a view transition frame block
  const updateDOM = () => {
    if (eBallOverlay) eBallOverlay.classList.add('hidden');
    document.documentElement.classList.remove('no-scroll');
    if (!queryParam) {
      closeProjectOverlay(false);
      return;
    }
    if (queryParam === "random") {
      if (eBallOverlay) {
        eBallOverlay.style.viewTransitionName = 'oracle-expand';
        eBallOverlay.classList.remove('hidden');
      }
      openEightBallOracle(pushToHistory);
    } else if (queryParam) {
      const index = cubbyData.findIndex(item => item.slug === queryParam);
      if (index >= 0 && index < 15) {
        openProjectOverlay(index, pushToHistory, false);
      } else {
        closeProjectOverlay(pushToHistory, false);
      }
    }
  };

  if (
    document.visibilityState === 'visible' &&
    document.startViewTransition
  ) {
    const transition = document.startViewTransition(updateDOM);
    transition.finished.then(() => {
      if (eBallOverlay) eBallOverlay.style.viewTransitionName = '';
    });
  } else {
    updateDOM();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => handleGlobalAppRouting(false), 150);

  const closeBtn = document.getElementById('close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeProjectOverlay();
    });
  }
});

window.addEventListener('popstate', (event) => {
  handleGlobalAppRouting(false);
});

// --- CURATORIAL HOVER, CLICK, & DRAG INTERACTION ENGINE ---
const curatorialPanel = document.getElementById('curatorial-panel');
const curatorialCloseBtn = document.getElementById('curatorial-close-btn');
const projectOverlay = document.getElementById('overlay');

if (curatorialCloseBtn) {
  curatorialCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    curatorialPanel.style.transform = ''; // clear drag transform
    curatorialPanel.classList.add('hidden');

    curatorialPanel.classList.remove('open', 'peek');

    document.documentElement.classList.remove('no-scroll');
  });
}

// --- MAGIC 8-BALL OVERLAY ROUTING & SELECTION ENGINE ---
// --- UPDATED MAGIC 8-BALL OVERLAY ROUTING & SELECTION ENGINE ---
const eBallOverlay = document.getElementById('eight-ball-overlay');
const eBallClose = document.getElementById('eight-ball-close');
const interactiveBall = document.getElementById('overlay-eight-ball');
const oracleAnswer = document.getElementById('oracle-answer');

let isOracleShaking = false;


const fx = willOWisps('#eight-ball-overlay', { count: 14, palette: 'marsh' });

function openEightBallOracle(pushToHistory = true) {
  if (!eBallOverlay) return;

  if (oracleAnswer) {
    oracleAnswer.innerHTML = "CLICK<br>TO SHAKE";
    oracleAnswer.style.opacity = '1';
    oracleAnswer.style.transform = 'scale(1)';
  }

  const eBallCubbyContent = document.querySelector('.cubby[data-index="15"] .content');

  const updateDOM = () => {
    eBallOverlay.classList.remove('hidden');
    document.documentElement.classList.add('no-scroll');
  };

  if (document.visibilityState === 'visible') {
    updateDOM();
  }

  if (pushToHistory) {
    history.pushState({ systemState: 'random' }, "", "?random");
  }
}

// Update the close handler to also utilize the smooth view transition morph engine
if (eBallClose) {
  eBallClose.addEventListener('click', () => {
    if (isOracleShaking) return;
    const eBallCubbyContent = document.querySelector('.cubby[data-index="15"] .content');

    eBallOverlay.style.viewTransitionName = 'oracle-expand';
    if (eBallCubbyContent) eBallCubbyContent.style.viewTransitionName = 'none';

    const updateDOM = () => {
      eBallOverlay.style.viewTransitionName = 'none';

      if (eBallCubbyContent) eBallCubbyContent.style.viewTransitionName = 'oracle-expand';

      eBallOverlay.classList.add('hidden');
      document.documentElement.classList.remove('no-scroll');
    };

    if (document.visibilityState === 'visible' && document.startViewTransition) {
      const transition = document.startViewTransition(updateDOM);

      transition.finished
        .catch(() => { })
        .finally(() => {
          // 3. Total Cleanup
          if (eBallCubbyContent) eBallCubbyContent.style.viewTransitionName = 'none';
          history.pushState(null, "", window.location.pathname);
        });
    } else {
      updateDOM();
      if (eBallCubbyContent) eBallCubbyContent.style.viewTransitionName = 'none';
      history.pushState(null, "", window.location.pathname);
    }
  });
}

if (interactiveBall) {
  interactiveBall.addEventListener('click', () => {
    if (isOracleShaking) return;

    isOracleShaking = true;
    interactiveBall.classList.add('shaking');

    if (oracleAnswer) {
      oracleAnswer.style.opacity = '0';
      oracleAnswer.style.transform = 'scale(0.7)';
    }

    setTimeout(() => {
      interactiveBall.classList.remove('shaking');

      const validProjects = cubbyData.filter(project => project.slug !== "random" && project.slug !== "curatorial-statement");
      console.log(validProjects);
      if (validProjects.length === 0) {
        if (oracleAnswer) oracleAnswer.innerHTML = "ERROR:<br>NO PROJ";
        isOracleShaking = false;
        return;
      }

      const randomIndex = Math.floor(Math.random() * validProjects.length);
      const chosenProject = validProjects[randomIndex];


      const originalProjectIndex = cubbyData.findIndex(item => item.title === chosenProject.title);

      if (oracleAnswer) {
        oracleAnswer.innerHTML = chosenProject.title;
        oracleAnswer.style.opacity = '1';
        oracleAnswer.style.transform = 'scale(1)';
      }

      setTimeout(() => {
        isOracleShaking = false;

        if (eBallOverlay) eBallOverlay.classList.add('hidden');
        document.documentElement.classList.remove('no-scroll');

        if (originalProjectIndex !== -1) {
          openProjectOverlay(originalProjectIndex, true);
        }
      }, 2300);

    }, 900);
  });
}

/* Orbs */
function willOWisps(target, {
  count = 14,
  size = 35,
  speed = 4,
  trail = 3,
  palette = 'light',
} = {}) {

  const PALS = {
    light: [[245, 245, 255], [255, 253, 216], [30, 80, 180]],
  };

  const pal = PALS[palette] ?? PALS.light;
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  const rnd = (a, b) => a + Math.random() * (b - a);

  if (getComputedStyle(el).position === 'static') el.style.position = 'relative';

  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'absolute', inset: '0',
    width: '100%', height: '100%',
    pointerEvents: 'none', zIndex: '0',
    willChange: 'transform',
  });
  el.insertBefore(canvas, el.firstChild);
  const ctx = canvas.getContext('2d');

  let wisps = [], sparks = [];
  let gatherPt = null; 

  function init() {
    canvas.width = el.offsetWidth;
    canvas.height = el.offsetHeight;
    wisps = Array.from({ length: count }, makeWisp);
    sparks = [];
    gatherPt = null;
  }
  new ResizeObserver(init).observe(el);
  init();

  function makeWisp() {
    const w = {
      x: rnd(canvas.width * .1, canvas.width * .9),
      y: rnd(canvas.height * .1, canvas.height * .9),
      vx: rnd(-.4, .4), vy: rnd(-.4, .4),
      wanderAngle: rnd(0, Math.PI * 2),
      wanderSpeed: rnd(-.022, .022),
      flicker: rnd(.6, 1), targetFlicker: rnd(.5, 1),
      flickTimer: 0, flickPeriod: rnd(10, 32),
      baseRadius: size * rnd(.6, 1.4),
      trail: [], trailLen: Math.floor(rnd(10, 24)),
      sparkTimer: 0, sparkPeriod: Math.floor(rnd(8, 22)),
      gatherAlpha: 1, dead: false,
    };
    bakeWisp(w);
    return w;
  }

  function bakeWisp(w) {
    const rad = w.baseRadius * (size / 30);
    const ext = Math.ceil(rad * 4.6);
    const dim = ext * 2;
    const oc = typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(dim, dim)
      : Object.assign(document.createElement('canvas'), { width: dim, height: dim });
    const ocx = oc.getContext('2d');
    const [core, glow, amb] = pal;
    const rg = (r0, r1) => ocx.createRadialGradient(ext, ext, r0, ext, ext, r1);
    const fill = (r) => { ocx.beginPath(); ocx.arc(ext, ext, r, 0, Math.PI * 2); ocx.fill(); };
    const rgba = (c, a) => `rgba(${c},${a})`;

    const haze = rg(0, rad * 4.5);
    haze.addColorStop(0, rgba(amb, .06));
    haze.addColorStop(1, rgba(amb, 0));
    ocx.fillStyle = haze; fill(rad * 4.5);

    const body = rg(0, rad);
    body.addColorStop(0, rgba(glow, .65));
    body.addColorStop(0.45, rgba(glow, .35));
    body.addColorStop(1, rgba(glow, 0));
    ocx.fillStyle = body; fill(rad);

    const inner = rg(0, rad * .48);
    inner.addColorStop(0, rgba(core, .95));
    inner.addColorStop(0.55, rgba(core, .5));
    inner.addColorStop(1, rgba(glow, 0));
    ocx.fillStyle = inner; fill(rad * .48);

    const pin = rg(0, rad * .15);
    pin.addColorStop(0, 'rgba(255,255,255,1)');
    pin.addColorStop(1, 'rgba(255,255,255,0)');
    ocx.fillStyle = pin; fill(rad * .15);

    w.cache = oc;
    w.cacheExt = ext;
    w.cacheDim = dim;
  }

  function makeSpark(x, y) {
    return {
      x: x + rnd(-18, 18), y: y + rnd(-18, 18),
      life: rnd(.5, 1), decay: rnd(.012, .028), size: rnd(.8, 2.4)
    };
  }

  function update(w) {
    return gatherPt ? updateGathering(w) : updateWandering(w);
  }

  function updateWandering(w) {
    const sm = speed / 4;
    const W = canvas.width, H = canvas.height;

    w.wanderSpeed += rnd(-.004, .004);
    w.wanderSpeed *= .96;
    w.wanderAngle += w.wanderSpeed + rnd(-.018, .018) * sm;
    w.vx += Math.cos(w.wanderAngle) * .05 * sm;
    w.vy += Math.sin(w.wanderAngle) * .06 * sm;
    w.vy -= .018 * sm;
    w.vx *= .965; w.vy *= .965;

    const mg = 80;
    if (w.x < mg) w.vx += .15 * sm;
    if (w.x > W - mg) w.vx -= .15 * sm;
    if (w.y < mg) w.vy += .15 * sm;
    if (w.y > H - mg) w.vy -= .15 * sm;

    w.x += w.vx; w.y += w.vy;

    w.trail.push({ x: w.x, y: w.y });
    const maxTrail = Math.max(Math.floor(w.trailLen * (trail / 5)), 1);
    if (w.trail.length > maxTrail) w.trail.shift();

    if (++w.flickTimer >= w.flickPeriod) {
      w.targetFlicker = rnd(.38, 1);
      w.flickPeriod = rnd(8, 30);
      w.flickTimer = 0;
    }
    w.flicker += (w.targetFlicker - w.flicker) * .07;

    if (++w.sparkTimer >= w.sparkPeriod) {
      if (Math.random() < .6) sparks.push(makeSpark(w.x, w.y));
      w.sparkPeriod = rnd(6, 22);
      w.sparkTimer = 0;
    }
  }

  function updateGathering(w) {
    const dx = gatherPt.x - w.x;
    const dy = gatherPt.y - w.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 6) {
      for (let i = 0; i < 7; i++) sparks.push(makeSpark(gatherPt.x, gatherPt.y));
      w.dead = true;
      return;
    }

    // Pull strength grows with distance so they accelerate from afar,
    // then naturally slow as they close in (accel proportional to dist)
    const sm = speed;
    const pull = Math.min(dist * 0.012, 1.8) * sm;
    w.vx += (dx / dist) * pull;
    w.vy += (dy / dist) * pull;
    w.vx *= 0.91;
    w.vy *= 0.91;

    w.x += w.vx;
    w.y += w.vy;

    w.trail.push({ x: w.x, y: w.y });
    const maxTrail = Math.max(Math.floor(w.trailLen * (trail / 5)), 1);
    if (w.trail.length > maxTrail) w.trail.shift();

    const fadeStart = 200;
    if (dist < fadeStart) {
      w.gatherAlpha = Math.min(w.gatherAlpha, dist / fadeStart);
    }
    w.flicker = w.gatherAlpha;
  }

  // ── Draw ──────────────────────────────────────────────────────────────────
  function draw(w) {
    const { cache, cacheExt: e, cacheDim: dim, flicker: f, trail: tr, gatherAlpha: ga } = w;
    const alpha = f * ga; 

    for (let i = 0; i < tr.length; i++) {
      const t = (i + 1) / tr.length;
      const pt = tr[i];
      const sw = dim * .12 * t;
      ctx.globalAlpha = .28 * t * alpha;
      ctx.drawImage(cache, pt.x - sw * .5, pt.y - sw * .5, sw, sw);
    }

    ctx.globalAlpha = alpha;
    ctx.drawImage(cache, w.x - e, w.y - e, dim, dim);
    ctx.globalAlpha = 1;
  }

  (function loop() {
    const W = canvas.width, H = canvas.height;

    ctx.clearRect(0, 0, W, H);


    ctx.globalCompositeOperation = 'screen';
    wisps.forEach(w => { update(w); draw(w); });
    wisps = wisps.filter(w => !w.dead);

    ctx.globalCompositeOperation = 'source-over';
    sparks = sparks.filter(s => {
      s.life -= s.decay;
      if (s.life <= 0) return false;
      ctx.fillStyle = `rgba(255,255,255,${s.life * s.life})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2); ctx.fill();
      return true;
    });

    requestAnimationFrame(loop);
  })();

  // ── Public API ────────────────────────────────────────────────────────────
  return {
    /**
     * Send all wisps toward (x, y) — element-relative coords — then vanish them.
     * Typically called from a click handler on another element:
     *
     *   const hostRect = document.querySelector('#hero').getBoundingClientRect();
     *   fx.gather(e.clientX - hostRect.left, e.clientY - hostRect.top);
     *
     * Or toward the centre of a specific element:
     *
     *   const host = document.querySelector('#hero').getBoundingClientRect();
     *   const btn  = document.querySelector('#btn').getBoundingClientRect();
     *   fx.gather(btn.left - host.left + btn.width/2,
     *             btn.top  - host.top  + btn.height/2);
     */
    gather(x, y) {
      gatherPt = { x, y };
      wisps.forEach(w => { w.gatherAlpha = 1; w.dead = false; });
    },
  };
}


// Gather to wherever the user clicked (coords relative to the host element)
document.querySelector('#eight-ball-overlay').addEventListener('click', e => {
  const r = e.currentTarget.getBoundingClientRect();
  fx.gather(e.clientX - r.left, e.clientY - r.top);
});

let resizeHandler = null;
let isGifBgRunning = false;

function startGifBg() {
  const grid = document.getElementById('bg-grid');
  if (!grid) return;

  const generateTiles = () => {
    grid.innerHTML = '';

    const computedStyles = window.getComputedStyle(grid);
    const gridTemplateColumns = computedStyles.getPropertyValue('grid-template-columns');
    const columns = gridTemplateColumns.split(' ').length;

    const tileWidth = parseFloat(gridTemplateColumns.split(' ')[0]);
    const tileHeight = tileWidth * 0.8;

    const rows = Math.ceil(grid.clientHeight / tileHeight);
    const totalTiles = columns * rows;

    grid.style.gridAutoRows = `${tileHeight}px`;

    for (let i = 0; i < totalTiles; i++) {
      const tile = document.createElement('div');

      const currentRow = Math.floor(i / columns);
      const tileNumber = ((i + currentRow) % 3) + 1;

      tile.classList.add('gif-tile', `tile-${tileNumber}`);
      grid.appendChild(tile);
    }
  };

  generateTiles();
  isGifBgRunning = true;

  window.removeEventListener('resize', resizeHandler);
  resizeHandler = generateTiles;
  window.addEventListener('resize', resizeHandler);
};


function stopGifBg() {
  if (!isGifBgRunning) return;

  const grid = document.getElementById('bg-grid');
  if (grid) grid.innerHTML = '';
  window.removeEventListener('resize', resizeHandler);

  isGifBgRunning = false;
}