/*
 * Vercel Web Analytics — plain HTML setup.
 * Queues calls until /_vercel/insights/script.js (loaded in each page's <head>) is ready.
 * The script only exists on Vercel deployments; elsewhere (e.g. local file, GitHub Pages)
 * it simply 404s and nothing is tracked.
 */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
