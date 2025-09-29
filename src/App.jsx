import React, { useState } from "react";
import { Download, BookOpen, FileText, Search } from "lucide-react";

const YogaLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const books = [
    {
      id: 1,
      title: "Bhakti Flow Yoga - A Training Guide for Practice and Life",
      author: "Rusti Wells",
      category: "Bhakti Yoga",
      cover:
        "/covers/Bhakti Flow Yoga - A Training Guide for Practice and Life.jpg",
      formats: {
        epub: "/books/Bhakti Flow Yoga - A Training Guide for Practice and Life.epub",
      },
    },
    {
      id: 2,
      title: "Bhakti Yoga - Tales and Teachings from the Bhagavata Purana",
      author: "Edwin F.Bryant",
      category: "Filosofía",
      cover:
        "/covers/Bhakti Yoga - Tales and Teachings from the Bhagavata Purana.jpg",
      formats: {
        epub: "/books/Bhakti Yoga - Tales and Teachings from the Bhagavata Purana.epub",
      },
    },
    {
      id: 3,
      title:
        "Little Flower Yoga for Kids - A Yoga and Mindfulness Program to Help Your Child Improve Attention and Emotional Balance",
      author: "Jennifer Cohen Harper",
      category: "Yoga Kids",
      cover:
        "/covers/Little Flower Yoga for Kids - A Yoga and Mindfulness Program to Help Your Child Improve Attention and Emotional Balance.jpg",
      formats: {
        epub: "/books/Little Flower Yoga for Kids - A Yoga and Mindfulness Program to Help Your Child Improve Attention and Emotional Balance.epub",
      },
    },
    {
      id: 4,
      title:
        "Constructions of Self and Other in Yoga, Travel, and Tourism - A Journey to Elsewhere",
      author: "Lori G. Beaman & Sonia Sikka",
      category: "Estudios Sociales",
      cover:
        "/covers/Constructions of Self and Other in Yoga, Travel, and Tourism - A Journey to Elsewhere.jpg",
      formats: {
        pdf: "/books/Constructions of Self and Other in Yoga, Travel, and Tourism - A Journey to Elsewhere.pdf",
      },
    },
    {
      id: 5,
      title:
        "Happy-Go-Yoga Simple Poses to Relieve Pain, Reduce Stress, and Add Joy",
      author: "Lori G. Beaman & Sonia Sikka",
      category: "Asanas",
      cover:
        "/covers/Happy-Go-Yoga Simple Poses to Relieve Pain, Reduce Stress, and Add Joy.jpg",
      formats: {
        epub: "/books/Happy-Go-Yoga Simple Poses to Relieve Pain, Reduce Stress, and Add Joy.epub",
      },
    },
    {
      id: 6,
      title:
        "Healing Yoga Proven Postures to Treat Common Ailments - from Backache to Bone Loss, Shoulder Pain to Bunions, and More",
      author: "Loren Fishman",
      category: "Yoga Terapéutico",
      cover:
        "/covers/Healing Yoga Proven Postures to Treat Common Ailments - from Backache to Bone Loss, Shoulder Pain to Bunions, and More.jpg",
      formats: {
        epub: "/books/Healing Yoga Proven Postures to Treat Common Ailments - from Backache to Bone Loss, Shoulder Pain to Bunions, and More.epub",
      },
    },
    {
      id: 7,
      title: "Roots of Yoga",
      author: "James Mallinson",
      category: "Historia del Yoga",
      cover: "/covers/Roots of Yoga.jpg",
      formats: {
        epub: "/books/Roots of Yoga.epub",
      },
    },
    {
      id: 8,
      title:
        "Myths of the Asanas - The Stories at the Heart of the Yoga Tradition",
      author: "Alanna Kaivalya",
      category: "Mitología",
      cover:
        "/covers/Myths of the Asanas - The Stories at the Heart of the Yoga Tradition.jpg",
      formats: {
        epub: "/books/Myths of the Asanas - The Stories at the Heart of the Yoga Tradition.epub",
      },
    },
    {
      id: 9,
      title:
        "The 21-Day Yoga Body - A Metabolic Makeover and Life-Styling Manual to Get You Fit, Fierce, and Fabulous in Just 3 Weeks",
      author: "Sadie Nardini",
      category: "Fitness",
      cover:
        "/covers/The 21-Day Yoga Body - A Metabolic Makeover and Life-Styling Manual to Get You Fit, Fierce, and Fabulous in Just 3 Weeks.jpg",
      formats: {
        epub: "/books/The 21-Day Yoga Body - A Metabolic Makeover and Life-Styling Manual to Get You Fit, Fierce, and Fabulous in Just 3 Weeks.epub",
      },
    },
    {
      id: 10,
      title: "The complete idiot's guide to yoga",
      author: "Joan Budilovsky",
      category: "Guía para principiantes de Yoga",
      cover: "/covers/The complete idiot's guide to yoga.jpg",
      formats: {
        epub: "/books/The complete idiot's guide to yoga.epub",
      },
    },
    {
      id: 11,
      title: "The Subtle Body - The Story of Yoga in America",
      author: "Stefanie Syman",
      category: "Historia del Yoga",
      cover: "/covers/The Subtle Body - The Story of Yoga in America.jpg",
      formats: {
        epub: "/books/The Subtle Body - The Story of Yoga in America.epub",
      },
    },
    {
      id: 12,
      title:
        "The Supreme Art and Science of Raja and Kriya Yoga - The Ultimate Path to Self-Realisation",
      author: "Steppen Sturgess",
      category: "Raja Yoga",
      cover:
        "/covers/The Supreme Art and Science of Raja and Kriya Yoga - The Ultimate Path to Self-Realisation.jpg",
      formats: {
        pdf: "/books/The Supreme Art and Science of Raja and Kriya Yoga - The Ultimate Path to Self-Realisation.pdf",
      },
    },
    {
      id: 13,
      title:
        "The Yoga Adventure for Children - Playing, Dancing, Moving, Breathing, Relaxing",
      author: "Helen Purpermat",
      category: "Yoga Kids",
      cover:
        "/covers/The Yoga Adventure for Children - Playing, Dancing, Moving, Breathing, Relaxing.jpg",
      formats: {
        pdf: "/books/The Yoga Adventure for Children - Playing, Dancing, Moving, Breathing, Relaxing.pdf",
      },
    },
    {
      id: 14,
      title:
        "True Yoga - Practicing With the Yoga Sutras for Happiness & Spiritual Fulfillment",
      author: "Jennie Lee",
      category: "Yoga Sutras",
      cover:
        "/covers/True Yoga - Practicing With the Yoga Sutras for Happiness & Spiritual Fulfillment.jpg",
      formats: {
        epub: "/books/True Yoga - Practicing With the Yoga Sutras for Happiness & Spiritual Fulfillment.epub",
      },
    },
    {
      id: 15,
      title: "YOGA - Essential Yoga Poses for Taking Control Over Your Mind",
      author: "Jen Solis",
      category: "Asanas",
      cover:
        "/covers/YOGA - Essential Yoga Poses for Taking Control Over Your Mind.jpg",
      formats: {
        epub: "/books/YOGA - Essential Yoga Poses for Taking Control Over Your Mind.epub",
      },
    },
    {
      id: 16,
      title: "Yoga - Philosophy for Everyone - Bending Mind and Body",
      author: "Liz Stillwagon Swan",
      category: "Filosofia",
      cover:
        "/covers/Yoga - Philosophy for Everyone - Bending Mind and Body.jpg",
      formats: {
        pdf: "/books/Yoga - Philosophy for Everyone - Bending Mind and Body.pdf",
      },
    },
    {
      id: 17,
      title: "Yoga for athletes",
      author: "Ryanne Cunningham",
      category: "Yoga para Atletas",
      cover: "/covers/Yoga for athletes.jpg",
      formats: {
        pdf: "/books/Yoga for athletes.pdf",
      },
    },
    {
      id: 18,
      title:
        "Yoga for Women - Gain Strength and Flexibility, Ease PMS Symptoms, Relieve Stress, Stay Fit Through Pregnancy, Age Gracefully",
      author: "Karin",
      category: "Yoga para Mujeres",
      cover:
        "/covers/Yoga for Women - Gain Strength and Flexibility, Ease PMS Symptoms, Relieve Stress, Stay Fit Through Pregnancy, Age Gracefully.jpg",
      formats: {
        epub: "/books/Yoga for Women - Gain Strength and Flexibility, Ease PMS Symptoms, Relieve Stress, Stay Fit Through Pregnancy, Age Gracefully.epub",
      },
    },
    {
      id: 19,
      title:
        "Yoga Nidra - A Meditative Practice for Deep Relaxation and Healing",
      author: "Karin",
      category: "Yoga Nidra",
      cover:
        "/covers/Yoga Nidra - A Meditative Practice for Deep Relaxation and Healing.jpg",
      formats: {
        epub: "/books/Yoga Nidra - A Meditative Practice for Deep Relaxation and Healing.epub",
      },
    },
    {
      id: 20,
      title: "Yoga Your Home Practice Companion",
      author: "Sivananda Yoga Vedanta Centre",
      category: "Asanas",
      cover: "/covers/Yoga Your Home Practice Companion.jpg",
      formats: {
        pdf: "/books/Yoga Your Home Practice Companion.pdf",
      },
    },
    {
      id: 21,
      title: "Chair Yoga",
      author: "Melinda Wright",
      category: "Chair Yoga",
      cover:
        "/covers/Chair Yoga - Pilates-Yoga for Seniors, Beginners and Office Workers for.png",
      formats: {
        epub: "/books/Chair Yoga - Pilates-Yoga for Seniors, Beginners and Office Workers for.epub",
      },
    },
    {
      id: 22,
      title: "Yoga 100 Key Yoga Poses and Postures",
      author: "Sam Siv",
      category: "Asanas",
      cover: "/covers/Yoga 100 Key Yoga Poses and Postures.png",
      formats: {
        epub: "/books/Yoga 100 Key Yoga Poses and Postures.epub",
      },
    },
    {
      id: 23,
      title: "Yoga Series Yoga For Self Improvement The Yoga Study",
      author: "Pushpender Pandey",
      category: "Asanas",
      cover: "/covers/Yoga Series Yoga For Self Improvement The Yoga Study.jpg",
      formats: {
        pdf: "/books/Yoga Series Yoga For Self Improvement The Yoga Study.pdf",
      },
    },
  ];

  const categories = [
    "all",
    "Bhakti Yoga",
    "Asanas",
    "Filosofía",
    "Estudios Sociales",
    "Yoga Terapéutico",
    "Mitología",
    "Fitness",
    "Chair Yoga",
    "Guía para principiantes de Yoga",
    "Historia del Yoga",
    "Raja Yoga",
    "Yoga Sutras",
    "Yoga para Atletas",
    "Yoga para Mujeres",
    "Yoga Nidra",
    "Yoga Kids",
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5F5F0 0%, #E8EDE8 25%, #F0F4F3 50%, #E5EBE8 75%, #EFF2F0 100%)",
      }}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-80 h-80 bg-contain bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('/assets/mandala-verde.png')`,
            transform: "rotate(-15deg)",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-contain bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/assets/mandala-dorado.png')`,
            transform: "rotate(25deg)",
          }}
        />
      </div>

      <header
        className="relative bg-white/50 backdrop-blur-md shadow-sm border-b border-white/60 overflow-hidden"
        style={{
          backgroundColor: "rgba(47, 79, 79, 0.95)",
        }}
      >
        {/* Buda de fondo en el header */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-50 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/buda-sereno.jpg')`,
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), transparent)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1), transparent)",
          }}
        />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <img src="/assets/logo.png" alt="Logo" className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-center mb-2 tracking-wider text-white">
            Biblioteca de Yoga
          </h1>
          <p className="text-center text-gray-200 text-sm md:text-base font-light italic">
            El yoga es la práctica de aquietar la mente
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-sm p-6 border border-white/70">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por título o autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-light transition-all ${
                    selectedCategory === cat
                      ? "text-white shadow-md"
                      : "bg-white/70 text-gray-600 hover:bg-white border border-gray-200"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === cat ? "#2F4F4F" : undefined,
                  }}
                >
                  {cat === "all" ? "Todos" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border hover:-translate-y-2"
              style={{ borderColor: "rgba(47, 79, 79, 0.1)" }}
            >
              <div
                className="relative h-72 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #E8EDE8 0%, #D0D5D0 100%)",
                }}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-light"
                    style={{
                      color: "#2F4F4F",
                    }}
                  >
                    {book.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-light text-lg text-gray-700 mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic font-light">
                  {book.author}
                </p>

                <div className="flex gap-2">
                  {book.formats.pdf && (
                    <a
                      href={book.formats.pdf}
                      download
                      className="flex-1 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-xl text-sm font-light transition-all shadow-md hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #2F4F4F 0%, #3A5F5F 100%)",
                      }}
                    >
                      <FileText className="w-4 h-4" />
                      PDF
                    </a>
                  )}
                  {book.formats.epub && (
                    <a
                      href={book.formats.epub}
                      download
                      className="flex-1 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-xl text-sm font-light transition-all shadow-md hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #5F7F7F 0%, #6F8F8F 100%)",
                      }}
                    >
                      <Download className="w-4 h-4" />
                      EPUB
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-white/70">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-light">
                No se encontraron libros
              </p>
              <p className="text-gray-400 text-sm mt-2 font-light">
                Intenta con otros términos de búsqueda
              </p>
            </div>
          </div>
        )}
      </div>

      <footer
        className="relative bg-white/50 backdrop-blur-md border-t border-white/60 py-8 mt-16"
        style={{
          backgroundColor: "rgba(47, 79, 79, 0.95)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-200 text-sm font-light">
            Namaste · Tu camino hacia la paz interior
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YogaLibrary;
