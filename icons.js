'use strict';
/* ===== Set de iconițe (24×24, contur) ===== */
const ICON_PATHS = {
  home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/>',
  helix:'<path d="M7 3c0 5 10 4 10 9s-10 4-10 9"/><path d="M17 3c0 5-10 4-10 9s10 4 10 9"/><path d="M7.6 12h8.8"/><path d="M9.6 6.6h4.8M9.6 17.4h4.8"/>',
  petri:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r="1.7"/><circle cx="14.6" cy="9" r="1.1"/><circle cx="13.2" cy="14.6" r="1.9"/><circle cx="8.6" cy="15.2" r="1"/>',
  flask:'<path d="M9.5 3h5"/><path d="M10.5 3v6L5 18.6A1.7 1.7 0 0 0 6.5 21h11a1.7 1.7 0 0 0 1.5-2.4L13.5 9V3"/><path d="M7.6 15h8.8"/>',
  chain:'<path d="M10 14a3.5 3.5 0 0 0 5 0l3.5-3.5a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0L5.5 13.5a3.5 3.5 0 0 0 5 5l1-1"/>',
  pair:'<circle cx="6" cy="12" r="3.3"/><circle cx="18" cy="12" r="3.3"/><path d="M10.4 9.6h3.2M10.4 12h3.2M10.4 14.4h3.2" stroke-dasharray="1.5 1.7"/>',
  thermo:'<path d="M10 14.8V5a2 2 0 1 1 4 0v9.8a4 4 0 1 1-4 0z"/><path d="M12 9v7.5"/>',
  fork:'<path d="M12 21v-6.5M12 14.5 6.5 5.5M12 14.5l5.5-9"/><circle cx="6.5" cy="4.5" r="1.5"/><circle cx="17.5" cy="4.5" r="1.5"/>',
  copy:'<rect x="8.5" y="8.5" width="12" height="12" rx="2.6"/><path d="M15.5 8.5V6.6A2.6 2.6 0 0 0 12.900 4H6.600A2.600 2.600 0 0 0 4 6.600v6.300A2.600 2.600 0 0 0 6.600 15.500H8.500"/>',
  clover:'<circle cx="5.7" cy="10" r="3"/><circle cx="18.3" cy="10" r="3"/><circle cx="12" cy="17.6" r="3"/><path d="M12 14.6V3.800M8.700 10h6.600"/>',
  cards:'<rect x="3.5" y="7" width="14" height="11" rx="2.2"/><path d="M7 4h12a2 2 0 0 1 2 2v9"/>',
  match:'<rect x="3" y="4" width="7" height="4.6" rx="1.3"/><rect x="14" y="4" width="7" height="4.6" rx="1.3"/><rect x="3" y="15.4" width="7" height="4.6" rx="1.3"/><rect x="14" y="15.4" width="7" height="4.6" rx="1.3"/><path d="M10 6.3l4 11.400M10 17.700l4-11.400"/>',
  quiz:'<circle cx="12" cy="12" r="9"/><path d="M9.4 9.4a2.7 2.7 0 1 1 3.700 2.500c-.8.4-1.100 1-1.100 1.800"/><path d="M12 17h.01"/>',
  sheet:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  book:'<path d="M6 3.500h12a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6z"/><path d="M6 3.500v17M9.800 8h6M9.800 12h6M9.800 16h3.500"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.500v2.200M12 19.300v2.200M2.500 12h2.200M19.300 12h2.200M5.300 5.300l1.500 1.500M17.200 17.200l1.500 1.500M5.300 18.700l1.500-1.500M17.200 6.800l1.500-1.500"/>',
  moon:'<path d="M20 14.500A8.500 8.500 0 0 1 9.500 4a8.500 8.500 0 1 0 10.500 10.500z"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  play:'<path d="M7 4.500v15l12-7.500z" fill="currentColor"/>',
  pause:'<rect x="6" y="4.500" width="4.200" height="15" rx="1.200" fill="currentColor"/><rect x="13.800" y="4.500" width="4.200" height="15" rx="1.200" fill="currentColor"/>',
  restart:'<path d="M4 12a8 8 0 1 0 2.600-5.900"/><path d="M4 4v4.500h4.500"/>',
  next:'<path d="M5 5l9 7-9 7z" fill="currentColor"/><path d="M18 5v14"/>',
  prev:'<path d="M19 5l-9 7 9 7z" fill="currentColor"/><path d="M6 5v14"/>',
  check:'<path d="M5 12.500l4.500 4.500L19 7.500"/>',
  flame:'<path d="M12 21.500c-3.900 0-6.500-2.600-6.500-6.200 0-2.600 1.500-4.400 3-6 .4 1.300 1.100 2.200 2.100 2.700C10.400 8.200 11 5.200 12.800 2.500c.6 2.900 2.100 4.500 3.500 6.200 1.300 1.500 2.200 3.300 2.200 5.700 0 3.600-2.600 7.100-6.500 7.100z"/><path d="M12 20.300c-1.400 0-2.300-1-2.300-2.300 0-1.300 1.100-1.900 2.300-3.300 1.200 1.400 2.300 2 2.300 3.300 0 1.300-.9 2.300-2.300 2.300z"/>',
  star:'<path d="M12 3.500l2.600 5.400 5.900.8-4.300 4.100 1 5.800L12 16.800 6.800 19.600l1-5.800L3.500 9.700l5.900-.8z"/>'
};
function icon(name, cls=''){ return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name]||''}</svg>`; }
