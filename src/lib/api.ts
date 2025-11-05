import type { Project, Thought, ContactMessage, ApiResponse } from './types';
import { supabase, isSupabaseConfigured } from './supabase';
import { isMockMode } from './utils';
import { mockProjects, mockThoughts } from '../data/mockData';

// Projects API
export async function getProjects(): Promise<ApiResponse<Project[]>> {
  if (isMockMode() || !isSupabaseConfigured()) {
    // Return mock data
    return {
      success: true,
      data: mockProjects,
    };
  }

  try {
    const { data, error } = await supabase!
      .from('projects')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) throw error;

    return {
      success: true,
      data: data as Project[],
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return {
      success: false,
      error: 'Failed to fetch projects',
      data: mockProjects, // Fallback to mock data
    };
  }
}

export async function getProjectBySlug(slug: string): Promise<ApiResponse<Project>> {
  if (isMockMode() || !isSupabaseConfigured()) {
    const project = mockProjects.find((p) => p.slug === slug);
    return {
      success: !!project,
      data: project,
      error: project ? undefined : 'Project not found',
    };
  }

  try {
    const { data, error } = await supabase!.from('projects').select('*').eq('slug', slug).single();

    if (error) throw error;

    return {
      success: true,
      data: data as Project,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    const mockProject = mockProjects.find((p) => p.slug === slug);
    return {
      success: false,
      error: 'Failed to fetch project',
      data: mockProject,
    };
  }
}

// Thoughts API
export async function getThoughts(): Promise<ApiResponse<Thought[]>> {
  if (isMockMode() || !isSupabaseConfigured()) {
    return {
      success: true,
      data: mockThoughts,
    };
  }

  try {
    const { data, error } = await supabase!
      .from('thoughts')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;

    return {
      success: true,
      data: data as Thought[],
    };
  } catch (error) {
    console.error('Error fetching thoughts:', error);
    return {
      success: false,
      error: 'Failed to fetch thoughts',
      data: mockThoughts,
    };
  }
}

export async function getThoughtBySlug(slug: string): Promise<ApiResponse<Thought>> {
  if (isMockMode() || !isSupabaseConfigured()) {
    const thought = mockThoughts.find((t) => t.slug === slug);
    return {
      success: !!thought,
      data: thought,
      error: thought ? undefined : 'Thought not found',
    };
  }

  try {
    const { data, error } = await supabase!.from('thoughts').select('*').eq('slug', slug).single();

    if (error) throw error;

    return {
      success: true,
      data: data as Thought,
    };
  } catch (error) {
    console.error('Error fetching thought:', error);
    const mockThought = mockThoughts.find((t) => t.slug === slug);
    return {
      success: false,
      error: 'Failed to fetch thought',
      data: mockThought,
    };
  }
}

// Contact API
export async function submitContactMessage(
  message: ContactMessage
): Promise<ApiResponse<ContactMessage>> {
  if (isMockMode() || !isSupabaseConfigured()) {
    console.log('Mock mode: Contact message', message);
    return {
      success: true,
      data: { ...message, id: `mock-${Date.now()}`, createdAt: new Date().toISOString() },
    };
  }

  try {
    const { data, error } = await supabase!
      .from('contact_messages')
      .insert([
        {
          name: message.name,
          email: message.email,
          message: message.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      data: data as ContactMessage,
    };
  } catch (error) {
    console.error('Error submitting message:', error);
    return {
      success: false,
      error: 'Failed to submit message. Please try again later.',
    };
  }
}


