const createClient = require('@supabase/supabase-js').createClient;
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const generateRandomIDs = (numIDs, min, max) => {
  const ids = new Set();
  while (ids.size < numIDs) {
    ids.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(ids);
}

const fetchWords = async (language_code) => {
  const language = 'word_?'.replace('?', language_code);
  const columns = ['word_en', language];
  const words_en = [];
  const translated_words = [];
  const ids = generateRandomIDs(5, 1, 507);
  for (let i = 0; i < 5; i++) {
    const { data, status, statusText } = await supabase
      .from('words')
      .select(columns.join(', '))
      .eq('id', ids[i]);
    if (status === 200) {
      words_en.push(data[0].word_en);
      translated_words.push(data[0][language]);
    } else {
      console.error(status, data, statusText);
    }
  }
  return { words_en, translated_words };
}

module.exports = { fetchWords };
