
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zwivohgtobyayyqxqznn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3aXZvaGd0b2J5YXl5cXhxem5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxOTQ5OTcsImV4cCI6MjA4Mjc3MDk5N30.4wGWg6S53pqGdu1I6Go8E7pHQnqpzIO7BTGc7HR5CU4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
