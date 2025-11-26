import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Profile, Education, Experience, Project, Certification, Skill, Achievement } from '../lib/supabase';

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data, error } = await supabase.from('profiles').select('*').maybeSingle();
        if (error) throw error;
        setProfile(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  return { profile, loading, error };
}

export function useEducation() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const { data, error } = await supabase.from('education').select('*').order('sort_order', { ascending: true });
        if (error) throw error;
        setEducation(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchEducation();
  }, []);

  return { education, loading, error };
}

export function useExperience() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchExperience() {
      try {
        const { data, error } = await supabase.from('experience').select('*').order('sort_order', { ascending: true });
        if (error) throw error;
        setExperience(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchExperience();
  }, []);

  return { experience, loading, error };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from('projects').select('*').order('sort_order', { ascending: true });
        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return { projects, loading, error };
}

export function useCertifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const { data, error } = await supabase.from('certifications').select('*').order('sort_order', { ascending: true });
        if (error) throw error;
        setCertifications(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchCertifications();
  }, []);

  return { certifications, loading, error };
}

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase.from('skills').select('*').order('category, sort_order', { ascending: true });
        if (error) throw error;
        setSkills(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchSkills();
  }, []);

  return { skills, loading, error };
}

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const { data, error } = await supabase.from('achievements').select('*').order('type, sort_order', { ascending: true });
        if (error) throw error;
        setAchievements(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchAchievements();
  }, []);

  return { achievements, loading, error };
}

export function useGroupedSkills() {
  const { skills, loading, error } = useSkills();
  const [groupedSkills, setGroupedSkills] = useState<Record<string, Skill[]>>({});

  useEffect(() => {
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
    setGroupedSkills(grouped);
  }, [skills]);

  return { groupedSkills, loading, error };
}
