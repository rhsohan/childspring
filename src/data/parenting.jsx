import React from 'react';
import { 
  Heart, Brain, Lightbulb, Smile, Users, ShieldCheck, 
  MessageCircle, Star, Activity, CheckCircle2 
} from 'lucide-react';

export const whyItMatters = [
  { icon: <Heart />, title: "Builds Strong Relationships", desc: "Fosters deep emotional bonds and trust." },
  { icon: <Brain />, title: "Supports Emotional Dev", desc: "Helps children regulate and understand emotions." },
  { icon: <Lightbulb />, title: "Improves Self-Confidence", desc: "Encourages children to believe in their abilities." },
  { icon: <CheckCircle2 />, title: "Encourages Good Behavior", desc: "Focuses on positive reinforcement over punishment." },
  { icon: <Users />, title: "Promotes Social Skills", desc: "Builds empathy, sharing, and communication skills." },
  { icon: <Smile />, title: "Creates Happy Families", desc: "Reduces stress and builds a loving home environment." }
];

export const corePrinciples = [
  { icon: <Heart />, title: "Love and Affection", desc: "Unconditional love is the foundation." },
  { icon: <Users />, title: "Respect and Empathy", desc: "Treating children with dignity." },
  { icon: <Activity />, title: "Encouragement", desc: "Supporting growth and learning." },
  { icon: <Brain />, title: "Understanding", desc: "Patience with developmental stages." },
  { icon: <MessageCircle />, title: "Open Communication", desc: "Listening actively and talking openly." },
  { icon: <Star />, title: "Positive Discipline", desc: "Guiding behavior without harshness." },
  { icon: <ShieldCheck />, title: "Family Connection", desc: "Spending quality time together." },
  { icon: <Smile />, title: "Acceptance", desc: "Embracing neurodiversity and uniqueness." }
];

export const benefits = [
  "Emotional Development",
  "Better Communication",
  "Higher Self-Esteem",
  "Stronger Relationships",
  "Better Social Skills",
  "Improved Behavior",
  "Greater Independence",
  "Lifelong Confidence"
];

export const journeyTimeline = [
  { step: "Love & Bonding", desc: "Creating a secure and affectionate base." },
  { step: "Understanding Needs", desc: "Learning how your unique child communicates." },
  { step: "Guidance & Support", desc: "Providing boundaries with empathy." },
  { step: "Encouragement & Growth", desc: "Cheering them on through challenges." },
  { step: "Confidence & Independence", desc: "Watching them bloom into themselves." }
];

export const neurodiverseSupport = [
  { title: "Autism Support", desc: "Focusing on clear routines, sensory needs, and visual communication." },
  { title: "ADHD Support", desc: "Providing structured environments, patience, and positive reinforcement." },
  { title: "Communication", desc: "Alternative ways to express needs and emotions." },
  { title: "Emotional Support", desc: "Helping them regulate big feelings with compassion." },
  { title: "Family Support", desc: "Ensuring siblings and parents are also cared for." },
  { title: "Inclusive Parenting", desc: "Advocating for your child in school and community." }
];

export const ageTips = [
  {
    id: "early",
    label: "Early Childhood (0–5 Years)",
    tips: [
      "Build secure attachment through constant affection.",
      "Encourage play, exploration, and non-verbal communication.",
      "Create consistent daily routines to provide safety."
    ]
  },
  {
    id: "childhood",
    label: "Childhood (6–10 Years)",
    tips: [
      "Encourage independence in daily tasks.",
      "Teach responsibility through small, manageable chores.",
      "Celebrate efforts and achievements, not just outcomes."
    ]
  },
  {
    id: "adolescence",
    label: "Adolescence (11–18 Years)",
    tips: [
      "Listen actively and without immediate judgment.",
      "Build deep trust and respect their privacy.",
      "Support their emotional well-being during transitions."
    ]
  }
];

export const trainingPrograms = [
  {
    title: "Positive Parenting Certificate Course",
    desc: "A comprehensive course designed to transform your parenting approach.",
    image: "/core/image/training/cert_course.png", 
    objectives: ["Understand child psychology", "Master positive discipline", "Improve family dynamics"],
    topics: ["Child brain development", "Handling tantrums", "Effective communication tools"],
    benefits: ["Become a certified practitioner", "Reduce household stress"],
    whoCanJoin: "Parents, caregivers, and early childhood educators.",
    highlights: ["12-week intensive", "Live Q&A sessions", "Certification upon completion"]
  },
  {
    title: "Parenting Workshops",
    desc: "Interactive, hands-on sessions focusing on specific behavioral challenges.",
    image: "/core/image/training/workshops.png",
    objectives: ["Learn actionable strategies", "Roleplay scenarios", "Connect with other parents"],
    topics: ["Setting boundaries", "Screen time management", "Sibling rivalry"],
    benefits: ["Immediate actionable advice", "Peer support network"],
    whoCanJoin: "Parents facing specific behavioral hurdles.",
    highlights: ["Weekend classes", "Expert facilitators", "Resource kits included"]
  },
  {
    title: "Webinars",
    desc: "Accessible online sessions on neurodiversity and inclusion.",
    image: "/core/image/training/webinars.png",
    objectives: ["Stay updated on research", "Learn from home", "Q&A with specialists"],
    topics: ["Understanding Autism", "ADHD and Focus", "Sensory processing"],
    benefits: ["Learn at your own pace", "Access to global experts"],
    whoCanJoin: "Anyone with internet access interested in child development.",
    highlights: ["Monthly events", "Recorded for later viewing", "Free resources"]
  }
];

export const faqs = [
  { q: "What is positive parenting?", a: "It is a parenting approach focused on developing a strong, deeply committed relationship between parent and child based on communication and mutual respect." },
  { q: "Why is it important?", a: "It fosters emotional intelligence, reduces behavioral issues, and helps children grow into confident, capable adults." },
  { q: "Can positive parenting help neurodiverse children?", a: "Absolutely. In fact, understanding, patience, and clear, positive communication are incredibly effective for neurodiverse children." },
  { q: "Do you provide parenting training?", a: "Yes, we offer certificate courses, workshops, and webinars specifically tailored for modern parenting challenges." },
  { q: "How can I join your workshops?", a: "You can book directly through our website or contact our support team to find the right workshop for you." }
];
