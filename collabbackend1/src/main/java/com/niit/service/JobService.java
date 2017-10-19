package com.niit.service;

import java.util.List;

import com.niit.model.Job;

public interface JobService {
	void addJob(Job job);
	List<Job>getAllJobs();
	Job getJob(int jobId);
}
