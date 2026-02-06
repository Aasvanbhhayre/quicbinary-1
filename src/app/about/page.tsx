"use client";
import React, { useState } from "react";


export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-40 text-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-blue-900/40" /> */}

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-xl text-gray-300">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span>About Quicbinary</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold">
            From concept to market leader
          </h1>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 pb-28">
        <img
          src="a.png"
          alt="Team discussion"
          className="rounded-2xl w-full h-[520px] object-cover"
        />
      </section>

      


      {/* BUILDING DIGITAL PRODUCTS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium mb-14">
            Building Digital Products That Scale
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden bg-white">
              <img
                src="a1.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-400 leading-relaxed text-xl space-y-6 mt-50">
              <p>
                Quicbinary Is A Technology-Driven Digital Agency Focused On
                Building Scalable, Secure, And High-Performance Web And Mobile
                Products. We Help Startups, Founders, And Growing Businesses Turn
                Ideas Into Reliable Digital Solutions Through Thoughtful Design,
                Clean Code, And Modern Technology.
              </p>

              <p>
                From Concept To Launch—And Beyond—We Partner With Our Clients At
                Every Stage Of Their Digital Journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <h2 className="text-3xl md:text-4xl font-medium">
            Who We Are
          </h2>

          <div className="text-gray-400 leading-relaxed  text-xl space-y-6">
            <p>
              We Are A Team Of Designers, Developers, And Problem-Solvers Who
              Believe Technology Should Be Simple, Powerful, And
              Purpose-Driven.
            </p>

            <p>
              At Quicbinary, We Don’t Just Build Websites Or Apps—We Build Digital
              Products That Solve Real Business Problems, Improve User
              Experience, And Drive Long-Term Growth.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

          {/* MISSION */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-3xl mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-xl">
              To Empower Businesses With Innovative Digital Solutions That Are
              Scalable, Secure, And Built For The Future—Without Unnecessary
              Complexity.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <h3 className="text-3xl mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-xl">
              To Become A Trusted Global Technology Partner For Startups And
              Businesses By Delivering High-Quality Digital Products That Create
              Real Impact.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="a2.png"
              alt="Team celebration"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
      {/* MEMBERS */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-medium mb-14">
            Members
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: "p1.png", name: "Priya Sharma", role: "Head Of Development" },
              { img: "p2.png", name: "Rahul Patel", role: "Lead Designer" },
              { img: "p3.png", name: "Anjali Gupta", role: "Frontend Developer" },
              { img: "p4.png", name: "Vikram Singh", role: "Backend Developer" },
              { img: "p5.png", name: "Sneha Mehta", role: "Product Manager" },
              { img: "p6.png", name: "Amit Kumar", role: "DevOps Engineer" },
            ].map((member, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute items-center bottom-6 left-25 ">
                  <h3 className="text-4xl font-medium">{member.name}</h3>
                  <p className="text-gray-300  text-2xl italic">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}