package com.fc.fcserver.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    String defaultUploadFile(MultipartFile file);
}
