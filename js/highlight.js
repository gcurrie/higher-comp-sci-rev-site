/* ── Lightweight syntax highlighter ───────────────────────────
   Colours code blocks for BOTH Python and SQA Reference Language
   (and blocks that mix the two). Token-based, no dependencies.
   Runs over every code block on the page and wraps tokens in spans
   that are coloured by the .tok-* rules in style.css.

   It is deliberately simple (regex tokens, not a full parser), so it
   is ~right rather than perfect — good enough for teaching snippets.
--------------------------------------------------------------- */
(function () {
  /* Keywords are case-sensitive: Python is lower-case, SQA Reference
     Language is UPPER-CASE. Both forms are included where they overlap
     so a lower-case Python variable never matches an SQA keyword. */
  const KEYWORDS = new Set([
    /* Python */
    'def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'and', 'or',
    'not', 'import', 'from', 'as', 'break', 'continue', 'pass', 'global', 'is',
    'with', 'try', 'except', 'finally', 'lambda', 'del', 'yield', 'class',
    /* SQA Reference Language */
    'DECLARE', 'AS', 'ARRAY', 'OF', 'RECORD', 'INITIALLY', 'SET', 'TO', 'SEND',
    'RECEIVE', 'FROM', 'DISPLAY', 'KEYBOARD', 'IF', 'THEN', 'ELSE', 'END', 'FOR',
    'WHILE', 'DO', 'REPEAT', 'UNTIL', 'PROCEDURE', 'FUNCTION', 'RETURNS',
    'RETURN', 'CALL', 'AND', 'OR', 'NOT', 'MOD', 'CASE', 'OTHERWISE', 'STRING',
    'INTEGER', 'INT', 'REAL', 'BOOLEAN', 'OPEN', 'CLOSE', 'READING', 'WRITING'
  ]);

  const CONSTS = new Set(['True', 'False', 'None', 'TRUE', 'FALSE', 'NULL']);

  /* comment | string | number | word | bracket */
  const RE = /(#[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(\b\d+\.?\d*\b)|([A-Za-z_][A-Za-z0-9_]*)|([()\[\]{}])/g;

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function wrap(cls, txt) {
    return '<span class="' + cls + '">' + esc(txt) + '</span>';
  }

  function highlight(text) {
    let out = '';
    let last = 0;
    let m;
    RE.lastIndex = 0;
    while ((m = RE.exec(text)) !== null) {
      out += esc(text.slice(last, m.index));
      const tok = m[0];
      if (m[1]) {
        out += wrap('tok-comment', tok);
      } else if (m[2]) {
        out += wrap('tok-string', tok);
      } else if (m[3]) {
        out += wrap('tok-number', tok);
      } else if (m[4]) {
        if (KEYWORDS.has(tok)) {
          out += wrap('tok-keyword', tok);
        } else if (CONSTS.has(tok)) {
          out += wrap('tok-bool', tok);
        } else if (/^\s*\(/.test(text.slice(m.index + tok.length))) {
          out += wrap('tok-func', tok);
        } else {
          out += esc(tok);
        }
      } else if (m[5]) {
        out += wrap('tok-bracket', tok);
      }
      last = m.index + tok.length;
    }
    out += esc(text.slice(last));
    return out;
  }

  function run() {
    const targets = new Set();
    document.querySelectorAll('.code-block pre').forEach(function (pre) {
      targets.add(pre.querySelector('code') || pre);
    });
    document.querySelectorAll('.content-article pre > code, .content-area pre > code').forEach(function (code) {
      targets.add(code);
    });
    targets.forEach(function (el) {
      if (el.dataset.hl) return;
      el.innerHTML = highlight(el.textContent);
      el.dataset.hl = '1';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
