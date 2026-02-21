export type Project = {
  id: number;
  title: string;
  category: string;
  img: string;
  height: string;
  details: {
    client: string;
    role: string;
    Headline: string;
    description: {
      column1?: string;
      column2?: string;
    };
    insights: string;
    name: string;
    designation: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Cargex | LCL Shipping & Logistics SaaS Platform",
    category: "Saas Dashboard",
    img: "/assets/projects/cargex.png",
    height: "h-72",
    details: {
      client: "Cargex",
      role: "UI/UX Design, SaaS Architecture, Platform Strategy",
      Headline:
        "The global shipping industry thrives on gatekeeping small exporters. We designed a platform that hands them the keys.",
      description: {
        column1:
          "For Cargex, we approached LCL (Less than Container Load) shipping not as a logistical puzzle,but as a crisis of trust. New exporters were bleeding profit margins just trying to find containerspace, forced to navigate a hostile, chaotic maze of endless emails and unvetted agents. Werealized that to fix the supply chain, we first had to eliminate the . We stripped away the manual negotiations and built an interface anchored entirely on verification and speed.",
        column2:
          "We realized the biggest bottleneck for new exporters wasn't finding cargo space—it was trusting the person selling it. By designing the UI to elevate 'verified partner' trust signals and radically simplifying the checkout flow, we shifted the user's emotional state from defensive skepticism to confident action.",
      },
      insights:
        "We realized the biggest bottleneck for new exporters wasn't finding cargo space—it was trusting the person selling it. By designing the UI to elevate 'verified partner' trust signals and radically simplifying the checkout flow, we shifted the user's emotional state from defensive skepticism to confident action.",
      name: "Nitin Prajapati",
      designation: "Lead Product Designer",
    },
  },
  {
    id: 2,
    title: "Prvaha- Hospital Management System",
    category: "HMS Dashbaord",
    img: "/assets/projects/prvaha.png",
    height: "h-64",
    details: {
      client: "Prvaha Labs",
      role: " UX/UI Design, Data Visualization, Design System",
      Headline:
        "In critical diagnostics, data stagnation is dangerous. We built a system that turns bottlenecks into uninterrupted flow.",
      description: {
        column1:
          " For Prvaha, we approached the medical laboratory not as a static facility, but as a living organism reliant on circulation. The industry standard was rigid and siloed, trapping critical diagnostic data behind complex, antiquated interfaces. We set out to dissolve those barriers, treating every user interaction as a vital pulse in the workflow.",
        column2:
          "The result is a dashboard that lives up to its name. By prioritizingintuitive navigation and real-time data visualization, we transformed dense metrics into a lucid stream of insights. Prvaha empowers technicians to move from raw samples to critical decisions without hesitation, restoring the rhythm of the lab.",
      },
      insights:
        "We discovered that 'alert fatigue' was the enemy of accuracy. By redesigning the notification hierarchy, we ensured that critical anomalies visually 'pulse' to the surface, while routine data flows quietly in the background—reducing   cognitive load by nearly half.",
      name: "Nitin Prajapati",
      designation: "Lead Product Designer",
    },
  },
  {
    id: 3,
    title: "Prvaha Brand identity",
    category: "Brand Identity",
    img: "/assets/projects/prvaha-branding.png",
    height: "h-72",
    details: {
      client: "Prvaha Labs",
      role: "Brand Strategy, Visual Identity, Design System",
      Headline:
        "In medical technology, trust is fragile. We built a visual identity that turns clinical software into a symbol of unwavering reliability",
      description: {
        column1:
          " For Prvaha, we approached the brand identity not as a tech startup, but as a highly calibrated medical instrument. The healthcare software space is saturated with generic blue logos and sterile, forgettable corporate design. We needed a visual vocabulary that communicated the agility of a modern SaaS platform while upholding the rigorous, life-and-death standards of laboratory science.",
        column2:
          " The result is an identity system anchored entirely in the concept of itsnamesake: Flow. We discarded cliché medical tropes—like crosses and DNA strands—in favor of a continuous, fluid design language. From the geometry of the logo to the high-contrast, authoritative color palette, every brand asset is engineered to project clarity, momentum, and absolute precision..",
      },
      insights:
        "Lab directors are inherently skeptical of 'disruptive tech' that looks too playful. We realized that by anchoring the brand's visual weight in typography traditionally found in scientific journals, we established immediate, subconscious credibility before they ever saw the software in action.",
      name: "Nitin Prajapati",
      designation: "Art Director",
    },
  },
  {
    id: 4,
    title: "Aspira",
    category: "UI/UX",
    img: "/assets/projects/aspira.png",
    height: "h-60 md:h-64",
    details: {
      client: "Aspira",
      role: "UI/UX Design, User Research, Community Strategy",
      Headline:
        "For many Indian entrepreneurs the biggest barrier to entry isn't capital—it is the paralysis of self-doubt.",
      description: {
        column1:
          "For Aspira, we identified that the startup ecosystem isn't lacking resources; it is drowning in noise. This fragmentation forces first-time founders—especially women and students—to navigate a maze without a map. We approached the design not as a directory of tools, but as a 'digital co-founder', stripping away the overwhelm to reveal a linear, guided path to launch.",
        column2:
          "The result is an ecosystem that prioritizes connection over content. By weaving mentorship and community validation directly into the user flow, wetransformed a lonely, intimidating process into a shared journey. Aspira doesn't just provide answers; it builds the confidence required to ask the right questions. result is a platform that feels like a trusted mentor, guiding users through the entire startup journey with empathy and clarity. From idea validation to MVP launch, Aspira provides the structure and support needed to turn passion into profit.",
      },
      insights:
        "We found that 'what do I do next?' is a paralyzed state for early founders. We replaced the standard dashboard with a milestone-based navigation system, reducing decision fatigue by focusing the user on one achievable victory at a time.",
      name: "Nitin Prajapati",
      designation: "Lead Product Designer",
    },
  },
  {
    id: 5,
    title: "Calmify",
    category: "UI/UX",
    img: "/assets/projects/calmify.png",
    height: "h-96 md:h-64",
    details: {
      client: "Calmify",
      role: "UI/UX Design, App Architecture, Emotional Design",
      Headline:
        "When you are overwhelmed, even typing feels like a burden. We designed a mental health space that simply listens.",
      description: {
        column1:
          "For Aspira, we identified that the  For Calmify, we approached mental wellness not as a daily task, but as an immediate intervention. The wellness app market is crowded with interfaces that demand too much cognitive load—forcing users to navigate complex menus or stare at a blank journal page. We inverted that model. By centering the UX around voice journaling, we allowed users to bypass the screen entirely and express raw emotion without the friction of typing. ecosystem isn't lacking resources; it is drowning in noise. This fragmentation forces first-time founders—especially women and students—to navigate a maze without a map. We approached the design not as a directory of tools, but as a 'digital co-founder', stripping away the overwhelm to reveal a linear, guided path to launch.",
        column2:
          "The result is a digital environment that feels like a sanctuary rather than software. The app instantly translates voice entries into personalized, actionable relief, while a carefully architected community feature connects users based on shared triggers. Calmify doesn't just track stress; it actively absorbs it, transforming isolation into a guided, shared journey. result is an ecosystem that prioritizes connection over content. By weaving mentorship and community validation directly into the user flow, wetransformed a lonely, intimidating process into a shared journey. Aspira doesn't just provide answers; it builds the confidence required to ask the right questions. result is a platform that feels like a trusted mentor, guiding users through the entire startup journey with empathy and clarity. From idea validation to MVP launch, Aspira provides the structure and support needed to turn passion into profit.",
      },
      insights:
        "We discovered that 'blank page anxiety' prevents people from journaling exactly when they need it most. By designing a voice-first interface, we removed the physical barrier to entry—allowing users to vent freely while the system quietly does the heavy lifting of figuring out what they need next. found that 'what do I do next?' is a paralyzed state for early founders. We replaced the standard dashboard with a milestone-based navigation system, reducing decision fatigue by focusing the user on one achievable victory at a time.",
      name: "Nitin Prajapati",
      designation: "Lead Product Designer",
    },
  },
  {
    id: 6,
    title: "Fundflux",
    category: "Web Design",
    img: "/assets/projects/fundflux.png",
    height: "h-72",
    details: {
      client: "Fundflux",
      role: "UI/UX Design,  Dashboard Architecture, Visual Identity",
      Headline:
        "For many Indian entrepreneurs the biggest barrier to entry isn't capital—it is the paralysis of self-doubt.",
      description: {
        column1:
          "For For FundFlux, we approached personal finance not as a calculator, but as a translator. Traditional banking apps are built like intimidating spreadsheets, alienating younger users who need clarity the most. We stripped away the jargon and the visual clutter, redesigning the financial experience to speak the visual language of the users who actually need it., we identified that the startup ecosystem isn't lacking resources; it is drowning in noise. This fragmentation forces first-time founders—especially women and students—to navigate a maze without a map. We approached the design not as a directory of tools, but as a 'digital co-founder', stripping away the overwhelm to reveal a linear, guided path to launch.",
        column2:
          "The result is an eThe result is a vibrant, high-contrast dashboard that never sacrifices utility for aesthetics. By utilizing bold, modern UI patterns, we transformed the typically stressful act of tracking expenses into an intuitive, empowering daily habit. It’s financial literacy disguised as exceptional design.cosystem that prioritizes connection over content. By weaving mentorship and community validation directly into the user flow, wetransformed a lonely, intimidating process into a shared journey. Aspira doesn't just provide answers; it builds the confidence required to ask the right questions. result is a platform that feels like a trusted mentor, guiding users through the entire startup journey with empathy and clarity. From idea validation to MVP launch, Aspira provides the structure and support needed to turn passion into profit.",
      },
      insights:
        "We realized that 'gamifying' finance can actually erode trust. Instead of making money look like a game, we used bold color systems strictly for cognitivehierarchy—allowing users to instantly distinguish between 'safe to spend' and'needs attention' with zero friction.",
      name: "Nitin Prajapati",
      designation: "Product Designer",
    },
  },
  {
    id: 7,
    title: "Sundrop Brand Identity",
    category: "Brand Identity",
    img: "/assets/projects/sundrop.png",
    height: "h-72",
    details: {
      client: "Sundrop",
      role: "Brand Identity, Packaging Design, Visual Strategy",
      Headline:
        "Legacy brands often die by clinging to nostalgia. We redesigned a household staple to run on modern vitality",
      description: {
        column1:
          " For the Sundrop rebranding, we approached the packaging not as a simple facelift, but as a generational bridge. The brand holds immense legacy trust, but its visual language was anchored in the past. We needed to retain the emotional warmth that made it an Indian kitchen staple, while entirely stripping away the visual clutter associated with 90s FMCG design.",
        column2:
          "The result is a revitalized brand system that feels simultaneously familiar and completely new. By cleaning up the typography, refining the brand assets into a more intentional, minimal style, and introducing a color palette that breathes, we shifted the visual narrative from heavy processing to clean energy.  It’s a design that looks as healthy as the product claims to be.",
      },
      insights:
        "We realized that modern consumers subconsciously associate visual clutter with artificial ingredients. By drastically increasing the negative space on the packaging and flattening the design elements, we communicated a 'purer' product before the nutritional label is even read.We realized that 'gamifying' finance can actually erode trust. Instead of making money look like a game, we used bold color systems strictly for cognitivehierarchy—allowing users to instantly distinguish between 'safe to spend' and'needs attention' with zero friction.",
      name: "Nitin Prajapati",
      designation: "Art Director",
    },
  },
  {
    id: 8,
    title: "Talentrix",
    category: "Brand Identity",
    img: "/assets/projects/talentrix.png",
    height: "h-64",
    details: {
      client: "Talentrix",
      role: " Brand Strategy, Visual Identity, Art Direction",
      Headline:
        " The gap between education and employment isn't a void—it is a missed connection. We designed the bridge.",
      description: {
        column1:
          " For Talentrix, we approached career readiness not as a linear ladder,but as a modular landscape. The old rules were broken; students felt unpreparedand companies felt isolated. We needed a visual language that didn’t just lookcorporate, but actively mapped the chaotic journey from the classroom to theboardroom.",
        column2:
          "The result is a dynamic identity system built on pathways. We rejected static shapes for rotated, modular forms that suggest movement and convergence.The central diamond in the logo isn't just decoration—it is the visual anchor whereraw skill and real-world opportunity finally collide.",
      },
      insights:
        "We realized that modern career paths are rarely straight lines. By rotating the modular forms, we visually validated the pivoting, winding journeys of students—turning their uncertainty into the brand's most defining feature.",
      name: "Nitin Prajapati",
      designation: " Creative Director",
    },
  },
];
